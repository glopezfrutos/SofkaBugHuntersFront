import {createSlice} from "@reduxjs/toolkit";
import {fetchStatus, IProject, IProjectInitialState} from "./projectTypes";
import {RootState} from "../../app/store";


const dummyData: IProject = {
    id: '123',
    name: "dummy project",
    status: "open",
    createdAt: "2022-06-24",
    closedAt: "2023-01-01",
    description: "long description here",
    members: ['test@gmail.com', 'test@gmail.com', 'test@gmail.com',],
    // owners: ['admin@gmail.com', 'test@gmail.com', 'nobody@gmail.com']
    owners: ['admin@gmail.com']

}

const initialState: IProjectInitialState = {
    projectList: [dummyData],
    fetchStatus: fetchStatus.FULFILLED,
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