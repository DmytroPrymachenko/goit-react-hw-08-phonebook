import styled from 'styled-components';

export const StyledErrorCon = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorWrapper = styled.div`
  position: relative;
  text-align: center;

  font-weight: bold;
  transition: transform 0.3s ease-in-out;
  margin-top: -200px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledError1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledError2 = styled.div`
  position: absolute;
  filter: blur(50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextDiv = styled.div`
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextSpan1 = styled.span`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2.5em;
  letter-spacing: 0.1em;
  font-weight: 700;
  padding: 10px 30px;
  transition: 0.5s;
`;
export const TextSpan2 = styled.span`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 700;
  padding: 10px 30px;
  transition: 0.5s;
`;
