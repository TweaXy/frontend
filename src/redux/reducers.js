import { createReducer } from '@reduxjs/toolkit';
import { setUser, setToken } from './actions';

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
});

export default userReducer;
