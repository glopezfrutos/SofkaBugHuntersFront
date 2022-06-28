import {createSlice} from "@reduxjs/toolkit";
import {IBug, IBugInitalState} from "./bugTypes";
import {fetchStatus} from "../projects/projectTypes";


const initialState: IBugInitalState = {
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
    //     builder.addCase()
    }
})

export default bugSlice.reducer
