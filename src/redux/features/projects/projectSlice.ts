import {createSlice} from "@reduxjs/toolkit";
import {fetchStatus, IProjectInitialState} from "./projectTypes";
import {RootState} from "../../app/store";


const initialState: IProjectInitialState = {
    projectList: [],
    fetchStatus: fetchStatus.IDLE,
    error: null
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

    }
})


export default projectSlice.reducer


export const selectProjectList = () => (state: RootState) => state.projects.projectList
export const selectProjectError = () => (state: RootState) => state.projects.error
export const selectProjectFetchStatus = () => (state: RootState) => state.projects.fetchStatus