import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import { RootState } from './index'
import { User } from "../models/models";
import UsersService from "../service/UsersService";
import UserSlice from './UserSlice';

export const userActions = UserSlice.actions

export const fetchUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        dispatch(userActions.setLoading());
        const response: User[] = await UsersService.getAllUsers();
        dispatch(userActions.setUsers(response))
    }

}