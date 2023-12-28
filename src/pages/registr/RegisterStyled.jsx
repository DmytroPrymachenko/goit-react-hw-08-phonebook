import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  @property --a {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }
`;

export const RegisterLogin = styled.div`
  position: absolute;
  inset: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  transition: 0.5s;
  color: #fff;
  overflow: hidden;
`;

export const RegisterFormBx = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  transform: translateY(126px);
  transition: 0.5s;
`;

export const RegisterDivBox = styled.div`
  position: relative;
  width: 420px;
  height: 200px;

  background: repeating-conic-gradient(
    from var(--a),
    #ff2770 0%,
    #ff2770 5%,
    transparent 5%,
    transparent 40%,
    #ff2770 50%
  );
  filter: drop-shadow(0 15px 50px #000);
  border-radius: 20px;
  animation: rotating 4s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  color: #fff;

  &:hover {
    width: 450px;
    height: 500px;
    ${RegisterFormBx} {
      transform: translateY(0px);
    }
  }

  @keyframes rotating {
    0% {
      --a: 0deg;
    }
    100% {
      --a: 360deg;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-conic-gradient(
      from var(--a),
      #45f3ff 0%,
      #45f3ff 5%,
      transparent 5%,
      transparent 40%,
      #45f3ff 50%
    );
    filter: drop-shadow(0 15px 50px #000);
    border-radius: 20px;
    animation: rotating 4s linear infinite;
    animation-delay: -1s;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: #2d2d39;
    border-radius: 15px;
    border: 8px solid #25252b;
  }

  &:hover {
    ${RegisterLogin} {
      inset: 40px;
    }
  }
`;

// export const LoginFormBx = styled.form`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 20px;
//   width: 70%;
//   transform: translateY(126px);
//   transition: 0.5s;
// `;

export const RegisterH2 = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.2em;
  margin-top: -10px;
`;
export const RegisterI = styled.i`
  color: #ff2770;
`;

export const RegisterInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  font-size: 1em;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid #fff;
  border-radius: 30px;

  ::placeholder {
    color: #999;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: none;

  font-size: 1em;
  color: #111;
  background: #45f3ff;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;

  ::placeholder {
    color: #999;
  }
  &:hover {
    box-shadow: 0 0 10px #45f3ff, 0 0 60px #45f3ff;
  }
`;
export const LRegisterDivGrup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LoginDivGrupSpan = styled.span`
  color: #fff;
  text-decoration: none;
`;
export const LoginNavLink = styled(NavLink)`
  color: #ff2770;
  text-decoration: none;
  font-weight: 600;
`;
