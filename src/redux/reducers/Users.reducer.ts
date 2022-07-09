import { AnyAction } from 'redux';

import { IUserProps } from '../../utils/Types';
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SET_NUMBER_OF_USERS, SET_FETCH_USERS_LOADING } from '../actions/Types';

interface IInitialStateProps {
    users: IUserProps[];
    numberOfUsers: number;
    isFetchingUsers: boolean;
};

const initialState: IInitialStateProps = {
    users: [],
    numberOfUsers: 1,
    isFetchingUsers: true,
};

const usersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_NUMBER_OF_USERS:
            return {
                ...state,
                numberOfUsers: action.payload,
            };
        case SET_FETCH_USERS_LOADING:
            return {
                ...state,
                isFetchingUsers: action.payload,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFetchingUsers: false,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isFetchingUsers: false,
            };
        default:
            return state;
    };
};

export default usersReducer;
