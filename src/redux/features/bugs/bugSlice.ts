import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBug, IBugInitialState} from "./bugTypes";
import {fetchStatus} from "../projects/projectTypes";
import {getChildrenBugs} from "./bugThunks";
import {RootState} from "../../app/store";


const initialState: IBugInitialState = {
    bugsList: [],
    error: null,
    fetchStatus: fetchStatus.IDLE,
    bugChosen: {} as IBug
}

const bugSlice = createSlice({
    name: "bug",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    //    get bugs children
        builder.addCase(getChildrenBugs.fulfilled, (state, action:PayloadAction<IBug[]>) => {
            state.bugsList = action.payload
            state.fetchStatus = fetchStatus.FULFILLED
        })
    }
})

export default bugSlice.reducer



//selectors
export const selectBugList = () => (state: RootState) => state.bug.bugsList
export const selectBugChosen = () => (state: RootState) => state.bug.bugChosen
export const selectBugError = () => (state: RootState) => state.bug.error
export const selectBugFetchStatus = () => (state: RootState) => state.bug.fetchStatus