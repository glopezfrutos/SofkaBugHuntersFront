
import {createAsyncThunk} from "@reduxjs/toolkit";
import {HttpMethod} from "../../general/generalTypes";
import {url} from "../../general/url";
import {IUser} from "./userTypes";


const ENDPOINT = url + '/api/v1/user/'
const authBasic = 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))

export const postUserThunk = createAsyncThunk("post/user",
    async (userEmail: string) => {

        const response = await fetch(ENDPOINT, {
            method: HttpMethod.POST,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: userEmail})
        })

        // localStorage.setItem("sessionId", data.sessionId ? data.sessionId : "");
        // localStorage.setItem("role", data.role ? data.role : "");
        return await response.json() as IUser


    }
)

export const getUsersThunk = createAsyncThunk("get/users",
    async () => {
        const response = await fetch(ENDPOINT, {
            headers: {
                'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))
            }
        })
        if (response.ok) {
            return await response.json() as IUser[]
        }

    }
)


export const putUserThunk = createAsyncThunk("put/user",
    async (user: IUser) => {
        try {
            const response = await fetch(ENDPOINT, {
                method: HttpMethod.PUT,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': authBasic
                },
                body: JSON.stringify(user)
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
