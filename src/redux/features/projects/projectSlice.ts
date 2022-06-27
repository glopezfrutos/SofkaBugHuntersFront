import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchStatus, IProject, IProjectInitialState} from "./projectTypes";
import {RootState} from "../../app/store";
import {getProjectsThunk, IResponse} from "./projectThunks";


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
        builder.addCase(getProjectsThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(getProjectsThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.REJECTED

        })
        builder.addCase(getProjectsThunk.fulfilled, (state, action:PayloadAction<IProject[] | undefined>) => {
            if (action.payload) {
                state.projectList = action.payload
                state.fetchStatus = fetchStatus.FULFILLED
            }
        })
    }
})


export default projectSlice.reducer


export const selectProjectList = () => (state: RootState) => state.projects.projectList
export const selectProjectError = () => (state: RootState) => state.projects.error
export const selectProjectFetchStatus = () => (state: RootState) => state.projects.fetchStatus