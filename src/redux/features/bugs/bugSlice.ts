import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBug, IBugInitialState} from "./bugTypes";
import {fetchStatus} from "../projects/projectTypes";
import {deleteBugById, getBugById, getChildrenBugs, postBugThunk, putBugThunk} from "./bugThunks";
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
        builder.addCase(getChildrenBugs.fulfilled, (state, action: PayloadAction<IBug[]>) => {
            state.bugsList = action.payload
            state.fetchStatus = fetchStatus.FULFILLED
        })
        //    get one bug by id
        builder.addCase(getBugById.fulfilled, (state, action: PayloadAction<IBug>) => {
            state.bugChosen = action.payload
            state.fetchStatus = fetchStatus.FULFILLED
        })
    //    Post bug
        builder.addCase(postBugThunk.fulfilled, (state, action: PayloadAction<IBug>) => {
            state.bugsList.push(action.payload)
            state.fetchStatus = fetchStatus.FULFILLED
        })
    //    delete bug by id
        builder.addCase(deleteBugById.fulfilled, (state, action: PayloadAction<string>) => {
            state.bugsList = state.bugsList.filter(bug => bug.id !== action.payload)
            state.fetchStatus = fetchStatus.FULFILLED
        })
    //    putBugThunk
        builder.addCase(putBugThunk.fulfilled, (state, action: PayloadAction<IBug>) => {
            state.bugChosen = action.payload
            state.bugsList = state.bugsList.map(b => b.id === action.payload.id ? action.payload : b)
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