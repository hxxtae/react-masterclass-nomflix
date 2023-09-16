import styled from 'styled-components';

export const Wrapper = styled.div`
`;
export const Banner = styled.div<{bgphoto: string}>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  background-image: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 1)), url(${(props) => props.bgphoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Title = styled.h2`
  font-size: 68px;
  font-weight: bold;
  margin-bottom: 40px;

  &::selection {
    background-color: transparent;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
`;

export const BannerButton= styled.button`
  border-radius: 5px;
  border: none;
  padding: 0 50px;
  background-color: rgba(0, 0, 0, .4);
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-right: 20px;
  transition: box-shadow 200ms ease-in-out;

  span {
    display: inline-block;
    padding: 14px 0 14px 10px;
  }

  :last-child {
    margin-right: 0;
  }

  :hover {
    background-color: #e7e7e7;
    color: #000000;
    box-shadow: 0 10px 20px 0 #000000;
  }
`;

export const Overview = styled.p`
  font-size: 25px;
  width: 40%;
  letter-spacing: .8px;
  line-height: 50px;
  /* _line-clamp */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: default;
  
  &::selection {
    background-color: transparent;
  }
`;
export const SliderWrapper = styled.div`
  
`;
export const SliderTitle = styled.h2`
  display: block;
  font-size: 30px;
  font-weight: bold;
  transform: translateY(-120px);
  margin-left: 60px;
`;