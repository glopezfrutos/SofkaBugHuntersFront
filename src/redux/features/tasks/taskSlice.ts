import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask, ITaskInitialState} from "./taskTypes";
import {fetchStatus} from "../projects/projectTypes";
import {RootState} from "../../app/store";
import {getChildrenTasks} from "./taskThunks";


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
    extraReducers: (builder) => {
        builder.addCase(getChildrenTasks.fulfilled, (state, action:PayloadAction<ITask[] | undefined>) => {
            if (action.payload) {
                state.taskList = action.payload
                state.fetchStatus = fetchStatus.FULFILLED
            }
        })
    }
})


export default taskSlice.reducer

//selectors
export const selectTaskList = () => (state: RootState) => state.task.taskList
export const selectTaskChosen = () => (state: RootState) => state.task.taskChosen
export const selectTaskError = () => (state: RootState) => state.task.error
export const selectTaskFetchStatus = () => (state: RootState) => state.task.fetchStatus