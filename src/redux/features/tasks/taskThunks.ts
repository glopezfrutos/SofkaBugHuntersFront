import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITask} from "./taskTypes";
import {HEADERS, HttpMethod} from "../../general/generalTypes";

const GET_CHILDREN_TASKS = 'https://bughuntersback.herokuapp.com/api/v1/project/'
const TASK_ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/task/'

export const getChildrenTasks = createAsyncThunk("get/childrenTask",
    async (projectId: string) => {
        try {
            const response = await fetch(`${GET_CHILDREN_TASKS}${projectId}/task`)
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
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`)
        return await response.json() as ITask
    }
)

export const deleteTaskById = createAsyncThunk('delete/task',
    async (taskId: string) => {
        const response = await fetch(`${TASK_ENDPOINT}${taskId}`, {
            method: HttpMethod.DELETE,
            headers: HEADERS,
        })
        if (response.ok) {
            return taskId
        }
    }
)

export const postTaskThunk = createAsyncThunk('post/task',
    async (task: ITask) => {
        const response = await fetch(TASK_ENDPOINT, {
            headers: HEADERS,
            method: HttpMethod.POST,
            body: JSON.stringify(task)
        })
        return await response.json() as ITask
    }
)