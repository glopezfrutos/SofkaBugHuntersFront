import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import projectReducer from "../features/projects/projectSlice";
import userReducer from "../features/users/userSlice";
import taskReducer from "../features/tasks/taskSlice";
import bugReducer from "../features/bugs/bugSlice";

export const store =configureStore({
    reducer: {
        projects: projectReducer,
        users: userReducer,
        task: taskReducer,
        bug: bugReducer,
    }
})

//types
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()