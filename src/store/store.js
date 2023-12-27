import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contactsSlise';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});
