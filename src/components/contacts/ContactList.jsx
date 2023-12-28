import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'store/contacts/CreateAsyncThunk';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'store/contacts/selector';
import { DeleteBtn, ElementDiv, ElementUl } from './stylesJSX/FormElementListStyles';
import { ElementsLi } from './stylesJSX/ElementStyles';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  console.log('filter', filter);
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
    console.log(items);
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
