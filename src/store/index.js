import { createStore, combineReducers, applyMiddleware } from 'redux';

import { userReducer } from './user/user.reducer';
import { navigationReducer } from './navigation/navigation.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    navigation: navigationReducer
});

export default createStore(rootReducer);