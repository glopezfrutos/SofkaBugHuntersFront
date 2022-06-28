import {createAsyncThunk} from "@reduxjs/toolkit";
import {IProject} from "./projectTypes";
import {HEADERS, HttpMethod} from "../../general/generalTypes";

const ENDPOINT = 'https://bughuntersback.herokuapp.com/api/v1/project/'

// export interface IResponse {
//     data: IProject[]
//     error: null | string
// }

export const getProjectsThunk = createAsyncThunk("get/projects",
    async () => {
        try {
            const response = await fetch(ENDPOINT)
            if (response.ok) {
                return await response.json() as IProject[]
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)

export const getOneProjectByIdThunk = createAsyncThunk("get/singleProject",
    async (projectId: string) => {
        try {
            const response = await fetch(`${ENDPOINT}${projectId}`)
            if (response.ok) {
                return await response.json() as IProject
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)

export const postProjectsThunk = createAsyncThunk("post/project",
    async (project: IProject) => {
        try {
            const response = await fetch(ENDPOINT, {
                method: HttpMethod.POST,
                headers: HEADERS,
                body: JSON.stringify(project)
            })
            if (response.ok) {
                return await response.json() as IProject
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)


export const putProjectsThunk = createAsyncThunk("put/project",
    async (project: IProject) => {
        try {
            const response = await fetch(ENDPOINT, {
                method: HttpMethod.PUT,
                headers: HEADERS,
                body: JSON.stringify(project)
            })
            if (response.ok) {
                return await response.json() as IProject
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteProjectThunk = createAsyncThunk("delete/project",
    async (projectId: string) => {
        try {
            const response = await fetch(`${ENDPOINT}${projectId}`, {
                method: HttpMethod.DELETE,
                headers: HEADERS,
            })
            if (response.ok) {
                return projectId
            }
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)