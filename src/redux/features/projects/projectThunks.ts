import {createAsyncThunk} from "@reduxjs/toolkit";
import {IProject} from "./projectTypes";
import {HttpMethod} from "../../general/generalTypes";
import {url} from "../../general/url";

const ENDPOINT = url + '/api/v1/project/'

// export interface IResponse {
//     data: IProject[]
//     error: null | string
// }

const authBasic = 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))


export const getProjectsThunk = createAsyncThunk("get/projects",
    async () => {
        try {
            const response = await fetch(ENDPOINT, {
                headers: {
                    'Authorization': authBasic
                }
            })
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
            const response = await fetch(`${ENDPOINT}${projectId}`, {
                headers: {
                    'Authorization': authBasic

                }
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

export const postProjectsThunk = createAsyncThunk("post/project",
    async (project: IProject) => {
        try {
            const response = await fetch(ENDPOINT, {
                method: HttpMethod.POST,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': authBasic

                },
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
        const response = await fetch(ENDPOINT, {
            //It should be POST since the backend does not have PUT
            method: HttpMethod.POST,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authBasic

            },
            body: JSON.stringify(project)
        })
        return await response.json() as IProject
    }
)

export const deleteProjectThunk = createAsyncThunk("delete/project",
    async (projectId: string) => {
        try {
            const response = await fetch(`${ENDPOINT}${projectId}`, {
                method: HttpMethod.DELETE,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': authBasic
                },
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