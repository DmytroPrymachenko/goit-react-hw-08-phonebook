import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInThunk } from 'store/authorization/authorizationAsyncThunk';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import {
  LoginDiv,
  LoginDivBox,
  LoginFormBx,
  LoginDivLogin,
  LoginH2,
  LoginInput,
  LoginButton,
  LoginDivGrup,
  LoginDivGrupSpan,
  LoginNavLink,
} from './LoginStyled';
import { Navigate, useLocation } from 'react-router-dom';

const LoginUserPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const location = useLocation();

  function submit(data) {
    console.log(data);
    dispatch(signInThunk(data))
      .unwrap()
      .then(() => {
        // navigate('/contacts');
        return toast.success("You're logged in!");
      })
      .catch(() => toast.error('Something went wrong!'));
  }

  const isAuthenticated = useSelector(state => !!state.auth.user);

  if (isAuthenticated) {
    return <Navigate to={location.state?.from || '/contacts'} />;
  }

  return (
    <div>
      {/* <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">
          Email
          <input {...register('email')} type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input {...register('password')} type="password" name="password" />
        </label>
        <button>Login</button>
      </form> */}
      <LoginDiv>
        <LoginDivBox>
          <LoginDivLogin>
            <LoginFormBx onSubmit={handleSubmit(submit)}>
              <LoginH2>
                <i
                  className="fa-solid fa-right-to-bracket"
                  style={{
                    color: '#ff2770',
                    textShadow: '0 0 5px #ff2770, 0 0 25px #ff2770',
                  }}
                ></i>{' '}
                Login{' '}
                <i
                  className="fa-solid fa-heart"
                  style={{
                    color: '#ff2770',
                    textShadow: '0 0 5px #ff2770, 0 0 25px #ff2770',
                  }}
                ></i>
              </LoginH2>
              <LoginInput {...register('email')} type="email" name="email" placeholder="Email" />

              <LoginInput {...register('password')} type="password" name="password" placeholder="Password" />
              <LoginButton>Login</LoginButton>
              <LoginDivGrup>
                <LoginDivGrupSpan>Forgot Password</LoginDivGrupSpan>
                <LoginNavLink to="/register">Register</LoginNavLink>
              </LoginDivGrup>
            </LoginFormBx>
          </LoginDivLogin>
        </LoginDivBox>
      </LoginDiv>
    </div>
  );
};

export default LoginUserPage;
