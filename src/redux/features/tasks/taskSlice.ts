import {createSlice} from "@reduxjs/toolkit";
import {ITask, ITaskInitialState} from "./taskTypes";
import {fetchStatus} from "../projects/projectTypes";
import {RootState} from "../../app/store";


const initialState: ITaskInitialState = {
    taskList: [],
    taskChosen: {} as ITask,
    error: null,
    fetchStatus: fetchStatus.IDLE
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (build) => {

    }
})


export default taskSlice.reducer

//selectors
export const selectTaskList = () => (state: RootState) => state.task.taskList
export const selectTaskChosen = () => (state: RootState) => state.task.taskChosen
export const selectTaskError = () => (state: RootState) => state.task.error
export const selectTaskFetchStatus = () => (state: RootState) => state.task.fetchStatus