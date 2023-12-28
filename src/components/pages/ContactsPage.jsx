import Search from 'components/pages/Contacts/Search';
import { FormDiv, FormElementDiv } from 'components/pages/Contacts/StylesJSX/FormElementListStyles';
import React from 'react';
import { Form } from 'components/pages/Contacts/Form';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ContactList } from './Contacts/ContactList';
const ContactsPage = () => {
  const isAuthenticated = useSelector(state => !!state.auth.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <FormDiv>
        <FormElementDiv>
          <Form />
          <Search />
          <ContactList />
        </FormElementDiv>
      </FormDiv>
    </>
  );
};

export default ContactsPage;
