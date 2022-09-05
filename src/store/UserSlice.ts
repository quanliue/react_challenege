import { User, UserAppState } from "../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUsersState: UserAppState = {
    users: [],
    loading: false,
    error: false
}

const UserSlice = createSlice({
    name: 'users',
    initialState: initialUsersState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
            state.loading = false;
            state.error = false
        },
        setLoading(state) {
            state.loading = true;
        },
    }
})
export default UserSlice;