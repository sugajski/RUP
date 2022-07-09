import { SET_NUMBER_OF_USERS } from './Types';

export const setNumberOfUsers = (number: number) => ({
    type: SET_NUMBER_OF_USERS,
    payload: number,
});
