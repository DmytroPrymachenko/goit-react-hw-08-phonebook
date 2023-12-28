import styled from 'styled-components';

export const ButtonGoBeack = styled.button`
  background-color: #27282c;
  position: relative;
  display: inline-block;
  font-size: 1.5em;
  color: #0ef;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid #0ef;
  padding: 10px 30px;
  z-index: 1;
  transition: color 1s, box-shadow 0.5s;
  overflow: hidden;
  &:hover {
    transition-delay: 0s, 0.5s;
    color: #fff;
    box-shadow: 0 0 10px #0ef, 0 0 20px #0ef, 0 0 40px #0ef, 0 0 80px #0ef, 0 0 160px #0ef;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 0;
    height: 100%;
    background: #0ef;
    transform: skewX(35deg);
    z-index: -1;
    transition: 1s;
  }
  &:hover::before {
    width: 100%;
  }
`;
export const ButtonGoBeackDiv = styled.div``;
export const ButtonGoBeackP = styled.p`
  color: #fff;
`;
