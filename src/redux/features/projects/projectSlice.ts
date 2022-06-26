import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchStatus, IProject, IProjectInitialState} from "./projectTypes";
import {RootState} from "../../app/store";
import {getProjectsThunk, IResponse} from "./projectThunks";


// const dummyData: IProject = {
//     id: '123',
//     name: "dummy project",
//     status: "open",
//     createdAt: "2022-06-24",
//     closedAt: "2023-01-01",
//     description: "long description here",
//     teamEmails: ['test@gmail.com', 'test@gmail.com', 'test@gmail.com',],
//     owners: ['admin@gmail.com']
// }

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
        builder.addCase(getProjectsThunk.fulfilled, (state, action: PayloadAction<IResponse>) => {
            const {error, data} = action.payload
            if (!error) {
                state.projectList = data
                state.fetchStatus = fetchStatus.FULFILLED
            } else {
                state.fetchStatus = fetchStatus.REJECTED
                state.error = error
            }
        })
    }
})


export default projectSlice.reducer


export const selectProjectList = () => (state: RootState) => state.projects.projectList
export const selectProjectError = () => (state: RootState) => state.projects.error
export const selectProjectFetchStatus = () => (state: RootState) => state.projects.fetchStatus