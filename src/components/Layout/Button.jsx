import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/authorization/authorizationAsyncThunk';

const UserButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div>
      {user ? (
        <>
          <p>Hellow {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : null}
    </div>
  );
};

export default UserButton;
