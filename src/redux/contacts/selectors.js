import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectStateContacts = state => state.contactsReducer.contacts;

export const selectItems = state => state.contactsReducer.contacts.items;

export const filterQweryInput = state => state.filtersReducer.filters.name;

export const selectFilter = createSelector(
  [selectItems, filterQweryInput],
  (arrayItems, filter) => {
    const options = {
      keys: ['name', 'number'],
      includeScore: true,
      includeMatches: true,
      threshold: 0.3,
      minMatchCharLength: 1,
    };

    const fuse = new Fuse(arrayItems, options);

    if (filter !== '') {
      const searchResults = fuse.search(filter);
      if (searchResults.length > 0) {
        return searchResults.map(result => result.item);
      } else {
        return [];
      }
    }
    return arrayItems;
  }
);
