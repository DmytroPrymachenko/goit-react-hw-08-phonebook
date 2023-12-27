import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

import ContactsPage from 'components/pages/ContactsPage';
import LoginUserPage from 'components/pages/Login/LoginUserPage';
import RegisterUserPage from 'components/pages/registr/RegisterUserPage';
import { useSelector } from 'react-redux';
import NotFound from 'components/NotFound/NotFound';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/contacts');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/contacts" /> : <LoginUserPage />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/contacts" /> : <RegisterUserPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
// <
