import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { refreshThunk } from 'store/authorization/authorizationAsyncThunk';
import Layout from 'components/layout/Layout';
import ContactsPage from 'pages/ContactsPage';

import RegisterUserPage from 'pages/registr/RegisterUserPage';
import NotFound from 'components/notFound/NotFound';
import LoginUserPage from 'pages/login/LoginUserPage';

const App = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/contacts');
  //   }
  // }, [isAuthenticated, navigate]);
  // console.log(isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginUserPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
// <
