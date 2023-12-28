import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from 'store/contacts/contactsSlise';
import { InputSearch, LabelSearch } from './stylesJSX/FormStyles';

const Search = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const isAuthenticated = useSelector(state => !!state.auth.user);
  const userName = useSelector(state => state.auth.user?.name);

  function handleChange({ target: { value } }) {
    console.log(value);
    setFilter(value);
    dispatch(searchContact(value));
  }
  return (
    <div>
      <LabelSearch htmlFor="search">Find contact: {isAuthenticated && <span>{userName}</span>}</LabelSearch>
      <InputSearch onChange={handleChange} type="text" id="search" value={filter} />
    </div>
  );
};

export default Search;
