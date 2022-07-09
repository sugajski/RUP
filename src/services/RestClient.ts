import axios from 'axios';

import config from '../../config.json';

export const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 6000,
});

const RestClient = {
    fetchUsers(numberOfUsers: number) {
        return instance.get(
            `/api/?inc=login,name,email,phone,picture,dob,location&results=${numberOfUsers}`,
        );
    },
};

export default RestClient;
