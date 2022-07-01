import {createAsyncThunk} from "@reduxjs/toolkit";
import {url} from "../../general/url";
import {IBug} from "./bugTypes";
import {HttpMethod} from "../../general/generalTypes";
import { showNotification } from "@mantine/notifications";


const GET_CHILDREN_BUGS = url + '/api/v1/task/'
const BUG_ENDPOINT = url + '/api/v1/bug/'

const authBasic = 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))


export const getChildrenBugs = createAsyncThunk('get/childrenBugs',
    async (taskId: string) => {
        const response = await fetch(`${GET_CHILDREN_BUGS}${taskId}/bug`, {
            headers: {
                'Authorization': authBasic
            }
        })
        if (response.ok) {
            return await response.json() as IBug[]
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)

export const getBugById = createAsyncThunk('get/singleBug',
    async (bugId: string) => {
        const response = await fetch(`${BUG_ENDPOINT}${bugId}`, {
            headers: {
                'Authorization': authBasic
            }
        })
        if (response.ok) {
            return await response.json() as IBug
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)

export const postBugThunk = createAsyncThunk("post/bug",
    async (bug: IBug) => {
        const response = await fetch(BUG_ENDPOINT, {
            method: HttpMethod.POST,
            body: JSON.stringify(bug),
            headers: {
                'Authorization': authBasic,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            return await response.json() as IBug
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)


export const putBugThunk = createAsyncThunk("put/bug",
    async (bug: IBug) => {
        const response = await fetch(BUG_ENDPOINT, {
            //it is post because the backend is built like that
            method: HttpMethod.POST,
            body: JSON.stringify(bug),
            headers: {
                'Authorization': authBasic,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            return await response.json() as IBug
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)

export const deleteBugById = createAsyncThunk("delete/bug",
    async (bugId: string) => {
        const response = await fetch(`${BUG_ENDPOINT}${bugId}`, {
            method: HttpMethod.DELETE,
            headers: {
                'Authorization': authBasic,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            return bugId
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)