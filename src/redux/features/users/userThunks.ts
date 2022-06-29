import {createAsyncThunk} from "@reduxjs/toolkit";
import { HEADERS, HttpMethod } from "../../general/generalTypes";
import { IUser } from "./userTypes";

const ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/user/'


export const postUserThunk = createAsyncThunk("post/user",
    async (userEmail: string) => {
        try {
            const response = await fetch(ENDPOINT, {
                method: HttpMethod.POST,
                headers: HEADERS,
                body: JSON.stringify({email: userEmail})
            })
            if (response.ok) {
                return await response.json() as IUser
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)