import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction('user/setUser');
export const setToken = createAction('user/setToken');
export const clearUser = createAction('user/clearUser');
