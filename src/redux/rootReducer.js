import { combineReducers } from 'redux';
import { userReducer } from './reducers';

const rootReducer = combineReducers({
    user: userReducer,
    // Add other reducers here
});

export default rootReducer;
