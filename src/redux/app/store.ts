import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import projectReducer from "../features/projects/projectSlice";
import userReducer from "../features/users/userSlice";

export const store =configureStore({
    reducer: {
        projects: projectReducer,
        users: userReducer
    }
})

//types
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()