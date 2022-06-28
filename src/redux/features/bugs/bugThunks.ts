import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBug} from "./bugTypes";


const GET_CHILDREN_BUGS = 'https://bughuntersback.herokuapp.com/api/v1/task/'


export const getChildrenBugs = createAsyncThunk('get/childrenBugs',
    async (taskId: string) => {
        const response = await fetch(`${GET_CHILDREN_BUGS}${taskId}/bug`)
        return await response.json() as IBug[]
    }
)