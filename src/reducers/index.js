import { combineReducers } from 'redux';

import loginReducer from './loginReducer';

const allreducers = combineReducers({
    token: loginReducer
});

export default allreducers;