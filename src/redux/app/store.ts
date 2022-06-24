import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import projectReducer from "../features/projects/projectSlice";

export const store =configureStore({
    reducer: {
        projects: projectReducer
    }
})

//types
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()