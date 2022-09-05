import axios from 'axios';

const UserApi = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_USERS_SVC_URL
    })
}

export default UserApi;