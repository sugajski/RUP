import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SET_NUMBER_OF_USERS, SET_FETCH_USERS_LOADING } from './Types';
import config from '../../../config.json';
import RestClient from '../../services/RestClient';
import { AppDispatch } from '../Store';
import { IUserProps } from '../../utils/Types';

export const setNumberOfUsers = (number: number) => ({
    type: SET_NUMBER_OF_USERS,
    payload: number,
});

const setFetchUsersLoading = (isLoading: boolean) => ({
    type: SET_FETCH_USERS_LOADING,
    payload: isLoading,
});

export const fetchUsers = (numberOfUsers: number) => (dispatch: AppDispatch) => {
    dispatch(setFetchUsersLoading(true));
    RestClient.fetchUsers(numberOfUsers)
        .then(response => dispatch(fetchedUsers(response.data.results)))
        .catch((error) => dispatch(failedFetchingUsers()));
};

const fetchedUsers = (users: IUserProps[]) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

const failedFetchingUsers = () => ({
    type: FETCH_USERS_FAILURE,
});
