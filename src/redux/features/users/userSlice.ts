import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchStatus} from "../projects/projectTypes";




const initialState  = {
    projectList: [],
    fetchStatus: fetchStatus.IDLE,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

    }
})


export default userSlice.reducer


export const selectUserList = () => (state: RootState) => state.users.projectList
export const selectUserError = () => (state: RootState) => state.users.error
export const selectUserFetchStatus = () => (state: RootState) => state.users.fetchStatus