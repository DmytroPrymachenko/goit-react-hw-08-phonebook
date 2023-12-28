import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/authorization/authorizationAsyncThunk';
import { ButtonGoBeack, ButtonGoBeackDiv } from './ButtonStyled';

const UserButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <ButtonGoBeackDiv>
      {user ? (
        <>
          <p>Hellow {user.name}</p>
          <ButtonGoBeack onClick={handleLogout}>Logout</ButtonGoBeack>
        </>
      ) : null}
    </ButtonGoBeackDiv>
  );
};

export default UserButton;
