import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../general/url";
import { IBug } from "./bugTypes";


const GET_CHILDREN_BUGS = url + '/api/v1/task/'
const BUG_ENDPOINT = url + '/api/v1/bug/'

export const getChildrenBugs = createAsyncThunk('get/childrenBugs',
    async (taskId: string) => {
        const response = await fetch(`${GET_CHILDREN_BUGS}${taskId}/bug`, {
            headers: {
                'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))
            }
        })
        return await response.json() as IBug[]
    }
)

export const getBugById = createAsyncThunk('get/singleBug',
    async (bugId: string) => {
        const response = await fetch(`${BUG_ENDPOINT}${bugId}`, {
            headers: {
                'Authorization': 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))
            }
        })
        return await response.json() as IBug
    }
)