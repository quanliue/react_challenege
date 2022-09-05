import UserApi from "./UserApi";

export default {
    async getAllUsers() {
        var response = await UserApi().get('users');
        return response.data;
    },
}