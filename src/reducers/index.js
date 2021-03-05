import { combineReducers } from 'redux';

import loginReducer from './loginReducer';

const allreducers = combineReducers({
    authData: loginReducer
});

export default allreducers;