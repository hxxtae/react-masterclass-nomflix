import { useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

import { publicUrlStr } from '../../utils';
import { Search } from '../../components';
import * as S from './style';

const menus = [
  { name: 'movie', nicName: 'Movie' },
  { name: 'tv', nicName: 'Series' }
];
const initSelect = (pathname: string) => {
  const [path1, path2] = [menus[0].name, menus[1].name];
  const paths = pathname.split('/');
  return paths.includes(path1) ? path1 :
    paths.includes(path2) ? path2 : path1;
}

function Header() {
  const menuAnimation = useAnimation();
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const [selected, setSelected] = useState<string>(initSelect(pathname));

  useMotionValueEvent(scrollY, 'change', (getY) => {
    getY > 40 ?
      menuAnimation.start("scroll") :
      menuAnimation.start("top");
  });
  
  const onSelect = (name: string) => {
    setSelected(name);
  };

  // 🐞[Bug]: layoutId Bug Issue Link : https://github.com/framer/motion/issues/1580

  return (
    <S.Nav variants={S.menuVariants} initial="top" animate={menuAnimation}>
      <S.Col>
        <S.Logo href={`${publicUrlStr()}`}>
          <img src={`${publicUrlStr()}/assets/svg/netflix_logo.svg`} alt="netflix logo" />
        </S.Logo>
        <S.List>
          {menus.map((menu) => (
            <S.Item key={menu.name} onClick={() => onSelect(menu.name)}>
              <Link to={`${publicUrlStr()}${menu.name === 'movie' ? '' : '/'+menu.name}`}>{menu.nicName}</Link>
              {selected === menu.name ? <S.Line layoutId="circle" /> : null}
            </S.Item    >
          ))}
        </S.List>
      </S.Col>
      <S.Col>
        <Search />
      </S.Col>
    </S.Nav>
  );
}

export default Header;

// [ useAnimation() ]
// - 코드를 통해 요소들을 제어할 때 요소들에게 동시에 애니메이션 효과를주기 위해 사용하는 방법이다.
// - 애니메이션 효과를 조건에 따라 동적으로 효과를 변경할 수 있다.

// -> https://www.framer.com/docs/animation/#component-animation-controls