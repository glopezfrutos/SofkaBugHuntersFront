import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "./taskTypes";
import { HttpMethod } from "../../general/generalTypes";
import { url } from "../../general/url";

const GET_CHILDREN_TASKS = url + '/api/v1/project/'
const TASK_ENDPOINT = url + '/api/v1/task/'

export const getChildrenTasks = createAsyncThunk("get/childrenTask",
    async (projectId: string) => {
        try {
            const response = await fetch(`${GET_CHILDREN_TASKS}${projectId}/task`, {
                headers: {
                    'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("email"))
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

export const getTaskById = createAsyncThunk('get/taskById',
    async (taskId: string) => {
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`, {
            headers: {
                'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("email"))
            }
        })
        return await response.json() as ITask
    }
)

export const deleteTaskById = createAsyncThunk('delete/task',
    async (taskId: string) => {
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`, {
            method: HttpMethod.DELETE,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("email"))
            },
        })
        if (response.ok) {
            return taskId
        }
    }
)

export const postTaskThunk = createAsyncThunk('post/task',
    async (task: ITask) => {
        const response = await fetch(TASK_ENDPOINT, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("email"))
            },
            method: HttpMethod.POST,
            body: JSON.stringify(task)
        })
        return await response.json() as ITask
    }
)