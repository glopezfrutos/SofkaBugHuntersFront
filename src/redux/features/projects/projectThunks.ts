import {createAsyncThunk} from "@reduxjs/toolkit";
import {IProject} from "./projectTypes";
import {HttpMethod} from "../../general/generalTypes";
import {url} from "../../general/url";
import {IUser} from "../users/userTypes";


const ENDPOINT = url + '/api/v1/project/'
///api/v1/history/project/{id}

// export interface IResponse {
//     data: IProject[]
//     error: null | string
// }

const authBasic = 'Basic ' + window.btoa(localStorage.getItem("email") + ':' + localStorage.getItem("sessionId"))

export const getProjectsThunk = createAsyncThunk("get/projects",
    async (user: IUser) => {
        const response = await fetch(ENDPOINT, {
            headers: {
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)
            }
        })
        return await response.json() as IProject[]

    }
)

export interface IProjectAuth {
    user: IUser
    projectId?: string
    project?: IProject
}

export const getOneProjectByIdThunk = createAsyncThunk("get/singleProject",
    async (projectAuth: IProjectAuth) => {
        const {user, projectId} = projectAuth

        try {
            const response = await fetch(`${ENDPOINT}${projectId}`, {
                headers: {
                    // 'Authorization': authBasic
                    'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)
                }
            })
            if (response.ok) {
                return await response.json() as IProject
            }
            showNotification({
                color: 'red',
                title: 'Oops',
                message: "There's something wrong with your credentials! Please log in again.",
            })
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)
//temporal fix
export const postProjectsThunk = createAsyncThunk("post/project",
    async (projectAuth: IProjectAuth) => {
        const {user, project} = projectAuth

        try {
            const response = await fetch(ENDPOINT, {
                method: HttpMethod.POST,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': authBasic
                    'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)
                },
                body: JSON.stringify(project)
            })
            if (response.ok) {
                return await response.json() as IProject
            }
            showNotification({
                color: 'red',
                title: 'Oops',
                message: "There's something wrong with your credentials! Please log in again.",
            })
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)

//temporal fix
export const putProjectsThunk = createAsyncThunk("put/project",
    async (projectAuth: IProjectAuth) => {
        const {user, project} = projectAuth

        const response = await fetch(ENDPOINT, {

            //It should be POST since the backend does not have PUT
            method: HttpMethod.POST,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': authBasic
                'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)

            },
            body: JSON.stringify(project)
        })
        if (response.ok) {
            return;
        }
        showNotification({
            color: 'red',
            title: 'Oops',
            message: "There's something wrong with your credentials! Please log in again.",
        })
        throw new Error(response.statusText)
    }
)

//temporal fix
export const deleteProjectThunk = createAsyncThunk("delete/project",
    async (projectAuth: IProjectAuth) => {
    const {user, projectId} = projectAuth
        try {
            const response = await fetch(`${ENDPOINT}${projectId}`, {
                method: HttpMethod.DELETE,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': authBasic
                    'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.sessionId)

                },
            })
            if (response.ok) {
                return projectId
            }
            showNotification({
                color: 'red',
                title: 'Oops',
                message: "There's something wrong with your credentials! Please log in again.",
            })
            throw new Error(response.statusText)
        } catch (e) {
            console.log(e)
        }
    }
)