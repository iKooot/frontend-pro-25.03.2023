import { createAction } from '@reduxjs/toolkit';

export const FETCH_HOTELS_ACTION = createAction('users/fetchUsers');
export const FETCH_HOTELS_SUCCESS = createAction('users/fetchUsers/success');
export const FETCH_HOTELS_FAILED = createAction('users/fetchUsers/failed');
