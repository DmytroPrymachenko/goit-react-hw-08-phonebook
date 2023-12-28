import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

import ContactsPage from 'components/pages/ContactsPage';
import LoginUserPage from 'components/pages/Login/LoginUserPage';
import RegisterUserPage from 'components/pages/registr/RegisterUserPage';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from 'components/NotFound/NotFound';
import { refreshThunk } from 'store/authorization/authorizationAsyncThunk';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/contacts');
    }
  }, [isAuthenticated, navigate]);
  console.log(isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/contacts" /> : <LoginUserPage />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/contacts" /> : <RegisterUserPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
// <
