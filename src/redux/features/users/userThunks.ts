import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "./userTypes";


const ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/user/'

export const getUsersThunk = createAsyncThunk("get/users",
    async () => {
        const response = await fetch(ENDPOINT)
        return await response.json() as IUser[]
    }
)