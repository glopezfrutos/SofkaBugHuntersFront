import {createAsyncThunk} from "@reduxjs/toolkit";
import {url} from "../../general/url";
import {IBug} from "./bugTypes";
import {HttpMethod} from "../../general/generalTypes";
import {IUser} from "../users/userTypes";
import {ITask} from "../tasks/taskTypes";


const GET_CHILDREN_BUGS = url + '/api/v1/task/'
const BUG_ENDPOINT = url + '/api/v1/bug/'

const authBasic = 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))

interface IBugAuth {
    user: IUser
    bugId?: string
    taskId?: string
    bug?: IBug
}

export const getChildrenBugs = createAsyncThunk('get/childrenBugs',
    async (bugAuth: IBugAuth) => {
        const {taskId, user} = bugAuth
        const response = await fetch(`${GET_CHILDREN_BUGS}${taskId}/bug`, {
            headers: {
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)

            }
        })
        return await response.json() as IBug[]
    }
)

export const getBugById = createAsyncThunk('get/singleBug',
    async (bugAuth: IBugAuth) => {
        const {bugId, user} = bugAuth
        const response = await fetch(`${BUG_ENDPOINT}${bugId}`, {
            headers: {
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)

            }
        })
        return await response.json() as IBug
    }
)

export const postBugThunk = createAsyncThunk("post/bug",
    async (bugAuth: IBugAuth) => {
        const {bug, user} = bugAuth
        const response = await fetch(BUG_ENDPOINT, {
            method: HttpMethod.POST,
            body: JSON.stringify(bug),
            headers: {
                // 'Authorization': authBasic,
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId),
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await response.json() as IBug
    }
)


export const putBugThunk = createAsyncThunk("put/bug",
    async (bugAuth: IBugAuth) => {
        const {bug, user} = bugAuth
        const response = await fetch(BUG_ENDPOINT, {
            //it is post because the backend is built like that
            method: HttpMethod.POST,
            body: JSON.stringify(bug),
            headers: {
                // 'Authorization': authBasic,
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId),
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await response.json() as IBug

    }
)

export const deleteBugById = createAsyncThunk("delete/bug",
    async (bugAuth: IBugAuth) => {
        const {bugId, user} = bugAuth
        await fetch(`${BUG_ENDPOINT}${bugId}`, {

            method: HttpMethod.DELETE,
            headers: {
                // 'Authorization': authBasic,
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId),
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return `${bugId}`

    }
)