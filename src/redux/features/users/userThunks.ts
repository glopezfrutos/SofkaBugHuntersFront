import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpMethod } from "../../general/generalTypes";
import { url } from "../../general/url";
import { IUser } from "./userTypes";

const ENDPOINT = url + '/api/v1/user/'

export const postUserThunk = createAsyncThunk("post/user",
    async (userEmail: string) => {
        try {
            const response = await fetch(ENDPOINT, {
                method: HttpMethod.POST,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail })
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

export const getUsersThunk = createAsyncThunk("get/users",
    async () => {
        const response = await fetch(ENDPOINT, {
            headers: {
                'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("email"))
            }
        })
        return await response.json() as IUser[]
    }
)
