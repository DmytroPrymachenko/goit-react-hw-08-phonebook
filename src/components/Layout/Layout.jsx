import React from 'react';
import { Outlet } from 'react-router-dom';

import UserButton from '../Button/Button';
import {
  Header,
  HeaderNavLink,
  HeaderNavLink2,
  HeaderNavLink3,
  IHeader,
  IHeader2,
  IHeader3,
  NavHeader,
  SpanHeader,
  SpanHeader2,
  SpanHeader3,
} from './LayoutStyles';
import { useSelector } from 'react-redux';

const Layout = () => {
  const isAuthenticated = useSelector(state => state.auth.user);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/contacts');
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <section>
      <Header>
        <svg></svg>
        <NavHeader>
          {isAuthenticated ? (
            <HeaderNavLink to="/contacts">
              <SpanHeader>Contacts</SpanHeader>
              <IHeader></IHeader>
            </HeaderNavLink>
          ) : (
            <>
              <HeaderNavLink2 to="/login">
                <SpanHeader2>Login</SpanHeader2>
                <IHeader2></IHeader2>
              </HeaderNavLink2>
              <HeaderNavLink3 to="/register">
                <SpanHeader3>Register</SpanHeader3>
                <IHeader3></IHeader3>
              </HeaderNavLink3>
            </>
          )}
        </NavHeader>
        <UserButton />
      </Header>
      <Outlet />
    </section>
  );
};
export default Layout;
