import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITask} from "./taskTypes";
import {HEADERS, HttpMethod} from "../../general/generalTypes";

const GET_TASK_ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/project/'
const POST_TASK_ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/task/'

export const getChildrenTasks = createAsyncThunk("get/childrenTask",
    async (projectId: string) => {
        try {
            const response = await fetch(`${GET_TASK_ENDPOINT}${projectId}/task`)
            if (response.ok) {
                return await response.json() as ITask[]
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)

export const postTaskThunk = createAsyncThunk('post/task',
        async (task: ITask) => {
            const response = await fetch(POST_TASK_ENDPOINT, {
                headers: HEADERS,
                method: HttpMethod.POST,
                body: JSON.stringify(task)
            })
            return await response.json() as ITask
        }

    )