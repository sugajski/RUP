import { AnyAction } from 'redux';

import { SET_NUMBER_OF_USERS } from '../actions/Types';

interface IInitialStateProps {
    numberOfUsers: number;
};

const initialState: IInitialStateProps = {
    numberOfUsers: 1,
};

const usersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_NUMBER_OF_USERS:
            return {
                ...state,
                numberOfUsers: action.payload,
            };
        default:
            return state;
    };
};

export default usersReducer;
