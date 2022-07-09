import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import usersReducer from './reducers/Users.reducer';

const configureStore = () => {
    return createStore(usersReducer, applyMiddleware(thunk));
}

export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
