import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchStatus} from "../projects/projectTypes";
import {getUsersThunk, postUserThunk} from "./userThunks";
import {IUser, IUserInitialState} from "./userTypes";


const initialState: IUserInitialState = {
    usersList: [],
    loggedUser: {} as IUser,
    fetchStatus: fetchStatus.IDLE,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserToState: (state, action: PayloadAction<IUser>) => {
            state.loggedUser = action.payload
        }
    },
    extraReducers: (builder) => {
        //    GET
        builder.addCase(getUsersThunk.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.usersList = action.payload
            state.fetchStatus = fetchStatus.FULFILLED
        })
    }
})

export const {addUserToState} = userSlice.actions

export default userSlice.reducer


export const selectUserList = () => (state: RootState) => state.users.usersList
export const selectLoggedUser = () => (state: RootState) => state.users.loggedUser
export const selectUserError = () => (state: RootState) => state.users.error
export const selectUserFetchStatus = () => (state: RootState) => state.users.fetchStatus