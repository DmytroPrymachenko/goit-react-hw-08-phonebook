import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUpThunk } from 'store/authorization/authorizationAsyncThunk';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  RegisterButton,
  RegisterDiv,
  RegisterDivBox,
  RegisterFormBx,
  RegisterH2,
  RegisterInput,
  RegisterLogin,
} from './RegisterStyled';

const RegisterUserPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit(data) {
    dispatch(signUpThunk(data))
      .unwrap()
      .then(() => {
        navigate('/contacts');
        return toast.success("You're logined!");
      })
      .catch(err => {
        toast.error(err);
      });
  }

  const isAuthenticated = useSelector(state => state.auth.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/contacts');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {/* <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">
          Name
          <input {...register('name')} type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <input {...register('email')} type="text" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input {...register('password')} type="text" name="password" />
        </label>
        <button>Sign Up</button>
      </form> */}
      <RegisterDiv>
        <RegisterDivBox>
          <RegisterLogin>
            <RegisterFormBx onSubmit={handleSubmit(submit)}>
              <RegisterH2>
                <i
                  class="fa-solid fa-right-to-bracket"
                  style={{
                    color: '#ff2770',
                    textShadow: '0 0 5px #ff2770, 0 0 25px #ff2770',
                  }}
                ></i>{' '}
                Sign up{' '}
                <i
                  class="fa-solid fa-heart"
                  style={{
                    color: '#ff2770',
                    textShadow: '0 0 5px #ff2770, 0 0 25px #ff2770',
                  }}
                ></i>
              </RegisterH2>
              <RegisterInput {...register('name')} type="text" name="name" placeholder="Name" />
              <RegisterInput {...register('email')} type="text" name="email" placeholder="Email" />
              <RegisterInput {...register('password')} type="text" name="password" placeholder="Password" />

              <RegisterButton>Sign up</RegisterButton>
            </RegisterFormBx>
          </RegisterLogin>
        </RegisterDivBox>
      </RegisterDiv>
      ;
    </div>
  );
};

export default RegisterUserPage;
