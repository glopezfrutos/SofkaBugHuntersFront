import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchStatus, IProject, IProjectInitialState} from "./projectTypes";
import {RootState} from "../../app/store";
import {
    deleteProjectThunk,
    getOneProjectByIdThunk,
    getProjectsThunk,
    postProjectsThunk,
    putProjectsThunk
} from "./projectThunks";


const initialState: IProjectInitialState = {
    projectList: [],
    projectChosen: {} as IProject,
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
    //    get one by id
        builder.addCase(getOneProjectByIdThunk.fulfilled, (state, action:PayloadAction<IProject | undefined>) => {
            if (action.payload) {
                state.projectChosen = action.payload
                state.fetchStatus = fetchStatus.FULFILLED
            }
        })
    //    post project
        builder.addCase(postProjectsThunk.fulfilled, (state, action:PayloadAction<IProject | undefined>) => {
            if (action.payload) {
                state.projectList.push(action.payload)
                state.fetchStatus = fetchStatus.FULFILLED
            }
        })
    //    delete
        builder.addCase(deleteProjectThunk.fulfilled, (state, action:PayloadAction<string | undefined>) => {
            if (action.payload) {
                state.projectList = state.projectList.filter(p => p.id !== action.payload)
                state.fetchStatus = fetchStatus.FULFILLED
            }
        })
    // put but is a post
        builder.addCase(putProjectsThunk.fulfilled, (state, action:PayloadAction<IProject>) => {
            if (action.payload) {
                state.projectList = state.projectList.map(p => p.id === action.payload?.id ? action.payload : p)
                // updated project chosen
                state.fetchStatus = fetchStatus.FULFILLED
            }
        })
    }
})


export default projectSlice.reducer


export const selectProjectList = () => (state: RootState) => state.projects.projectList
export const selectProjectChosen = () => (state: RootState) => state.projects.projectChosen
export const selectProjectError = () => (state: RootState) => state.projects.error
export const selectProjectFetchStatus = () => (state: RootState) => state.projects.fetchStatus