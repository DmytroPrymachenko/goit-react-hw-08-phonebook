import React, { useEffect } from 'react';
import { DeleteBtn, ElementDiv, ElementUl } from './StylesJSX/FormElementListStyles';
import { ElementsLi } from './StylesJSX/ElementStyles';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectError, selectFilter, selectIsLoading } from 'store/selector';
import { deleteContactThunk, fetchContactsThunk } from 'store/CreateAsyncThunk';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContactThunk(id));
  }

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function filteredContacts() {
    console.log(filter);
    if (filter && items.length > 0) {
      return items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
    } else return items;
  }

  return (
    <ElementDiv>
      <ElementUl>
        {error && <h1>{error}</h1>}
        {isLoading && <h1>Loading...</h1>}
        {filteredContacts().length > 0 ? (
          filteredContacts().map(el => (
            <ElementsLi key={el.id}>
              <p>
                {el.name}: {el.number}
              </p>
              <DeleteBtn
                onClick={() => {
                  handleDelete(el.id);
                }}
                type="button"
              >
                DELETE
              </DeleteBtn>
            </ElementsLi>
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ElementUl>
    </ElementDiv>
  );
};
