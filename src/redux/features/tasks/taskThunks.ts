import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITask} from "./taskTypes";
import {HttpMethod} from "../../general/generalTypes";
import {url} from "../../general/url";
import { showNotification } from "@mantine/notifications";

const GET_CHILDREN_TASKS = url + '/api/v1/project/'
const TASK_ENDPOINT = url + '/api/v1/task/'

const authBasic = 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))


export const getChildrenTasks = createAsyncThunk("get/childrenTask",
    async (projectId: string) => {
        try {
            const response = await fetch(`${GET_CHILDREN_TASKS}${projectId}/task`, {
                headers: {
                    'Authorization': authBasic

                }
            })
            if (response.ok) {
                return await response.json() as ITask[]
            }
            showNotification({
                color: 'red',
                title: 'Oops',
                message: "There's something wrong with your credentials! Please log in again.",
            })
            // throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)

export const getTaskById = createAsyncThunk('get/taskById',
    async (taskId: string) => {
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`, {
            headers: {
                'Authorization': authBasic

            }
        })
        if (response.ok) {
            return await response.json() as ITask
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)

export const deleteTaskById = createAsyncThunk('delete/task',
    async (taskId: string) => {
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`, {
            method: HttpMethod.DELETE,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authBasic

            },
        })
        if (response.ok) {
            return taskId
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)

export const postTaskThunk = createAsyncThunk('post/task',
    async (task: ITask) => {
        const response = await fetch(TASK_ENDPOINT, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authBasic

            },
            method: HttpMethod.POST,
            body: JSON.stringify(task)
        })
        if (response.ok) {
            return await response.json() as ITask
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)


export const putTaskThunk = createAsyncThunk('put/task',
    async (task: ITask) => {
        const response = await fetch(TASK_ENDPOINT, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authBasic
            },
            //The backed takes the post as a put.
            method: HttpMethod.POST,
            body: JSON.stringify(task)
        })
        if (response.ok) {
            return await response.json() as ITask
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
    }
)
