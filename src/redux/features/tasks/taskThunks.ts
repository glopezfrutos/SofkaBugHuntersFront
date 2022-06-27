import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITask} from "./taskTypes";

const ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/project/'

export const getChildrenTasks = createAsyncThunk("get/childrenTask",
    async (projectId: string) => {
        try {
            const response = await fetch(`${ENDPOINT}${projectId}/task`)
            if (response.ok) {
                return await response.json() as ITask[]
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)