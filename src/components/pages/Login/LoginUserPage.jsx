import React from 'react';
import { useDispatch } from 'react-redux';
import { signInThunk } from 'store/authorization/authorizationAsyncThunk';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  LoginDiv,
  LoginDivBox,
  LoginFormBx,
  LoginDivLogin,
  LoginH2,
  LoginI,
  LoginInput,
  LoginButton,
  LoginDivGrup,
  LoginDivGrupSpan,
  LoginNavLink,
} from './loginStyled';
import { signIn } from 'api/Appi';

const LoginUserPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit(data) {
    console.log(data);
    dispatch(signInThunk(data))
      .unwrap()
      .then(() => {
        navigate('/contacts');
        return toast.success("You're logged in!");
      })
      .catch(() => toast.error('Something went wrong!'));
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
                  class="fa-solid fa-right-to-bracket"
                  style={{
                    color: '#ff2770',
                    textShadow: '0 0 5px #ff2770, 0 0 25px #ff2770',
                  }}
                ></i>{' '}
                Login{' '}
                <i
                  class="fa-solid fa-heart"
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
