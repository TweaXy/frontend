import { createReducer } from '@reduxjs/toolkit';
import { setUser, setToken, clearUser } from './actions';

const initialState = {
    user: {},
    token: null,
};

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(setUser, (state, action) => {
        state.user = action.payload;
    });

    builder.addCase(setToken, (state, action) => {
        state.token = action.payload;
    });

    builder.addCase(clearUser, (state) => {
        state.user = {};
        state.token = null;
    });
});

export default userReducer;
