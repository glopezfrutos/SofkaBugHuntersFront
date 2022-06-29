import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBug} from "./bugTypes";


const GET_CHILDREN_BUGS = 'https://bughuntersback.herokuapp.com/api/v1/task/'
const BUG_ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/bug/'

export const getChildrenBugs = createAsyncThunk('get/childrenBugs',
    async (taskId: string) => {
        const response = await fetch(`${GET_CHILDREN_BUGS}${taskId}/bug`)
        return await response.json() as IBug[]
    }
)

export const getBugById = createAsyncThunk('get/singleBug',
    async (bugId: string) => {
        const response = await fetch(`${BUG_ENDPOINT}${bugId}`)
        return await response.json() as IBug
    }
)