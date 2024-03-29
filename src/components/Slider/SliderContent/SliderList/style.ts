import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../../../utils';

export const slideVariants = {
  hidden: (direction: boolean) => ({
    x: direction ? -window.innerWidth - 5 : window.innerWidth + 5
  }),
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: .5
    }
  },
  exit: (direction: boolean) => ({
    x: !direction ? -window.innerWidth - 5 : window.innerWidth + 5,
    transition: {
      type: "tween",
      duration: .5
    }
  })
}

export const Row = styled(motion.ul)<{offset: number}>`
  position: absolute;
  display: grid;
  gap: 8px;
  grid-template-columns: ${({ offset }) => `repeat(${offset}, 1fr)`};
  width: 100%;
  padding: 0 60px;
  margin-bottom: 5px;

  ${media('mobile')} {
    padding: 0 35px;
  }
`;

