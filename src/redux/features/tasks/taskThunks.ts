import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITask} from "./taskTypes";
import {HttpMethod} from "../../general/generalTypes";
import {url} from "../../general/url";
import {IUser} from "../users/userTypes";


const GET_CHILDREN_TASKS = url + '/api/v1/project/'
const TASK_ENDPOINT = url + '/api/v1/task/'

const authBasic = 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))


interface ITaskAuth {
    user: IUser
    projectId?: string
    taskId?: string
    task?: ITask
}

//temporal fixed
export const getChildrenTasks = createAsyncThunk("get/childrenTask",
    async (taskAuth: ITaskAuth) => {
        const {user, projectId} = taskAuth
        try {
            const response = await fetch(`${GET_CHILDREN_TASKS}${projectId}/task`, {
                headers: {
                    // 'Authorization': authBasic
                    'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)
                }
            })
            if (response.ok) {
                return await response.json() as ITask[]
            }

            // throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)

//temporal fixed
export const getTaskById = createAsyncThunk('get/taskById',
    async (taskAuth: ITaskAuth) => {
        const {user, taskId} = taskAuth
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`, {
            headers: {
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)

            }
        })
        return await response.json() as ITask

    }
)
//temporal fixed
export const deleteTaskById = createAsyncThunk('delete/task',
    async (taskAuth: ITaskAuth) => {
        const {user, taskId} = taskAuth
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`, {
            method: HttpMethod.DELETE,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)


            },
        })
        if (response.ok) {
            return taskId
        }

    }
)

//temporal fixed
export const postTaskThunk = createAsyncThunk('post/task',
    async (taskAuth: ITaskAuth) => {
        const {user, task} = taskAuth
        const response = await fetch(TASK_ENDPOINT, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)
            },
            method: HttpMethod.POST,
            body: JSON.stringify(task)
        })
        return await response.json() as ITask

    }
)

//temporal fixed
export const putTaskThunk = createAsyncThunk('put/task',
    async (taskAuth: ITaskAuth) => {
        const {user, task} = taskAuth
        const response = await fetch(TASK_ENDPOINT, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)
            },
            //The backed takes the post as a put.
            method: HttpMethod.POST,
            body: JSON.stringify(task)
        })
        return await response.json() as ITask

    }
)
