import React from 'react';

import { FormDiv, FormElementDiv } from 'components/contacts/stylesJSX/FormElementListStyles';
import Search from 'components/contacts/Search';
import { ContactList } from 'components/contacts/ContactList';
import { Form } from 'components/contacts/Form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

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
