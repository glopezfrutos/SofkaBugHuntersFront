import {createAsyncThunk} from "@reduxjs/toolkit";
import {IProject} from "./projectTypes";

const GET = 'https://bughuntersback.herokuapp.com/get/projects'

export interface IResponse {
    data: IProject[]
    error: null | string
}

export const getProjectsThunk = createAsyncThunk("get/products",
    async (): Promise<IResponse> => {
        try {
            const response = await fetch(GET)
            const data = await response.json() as IProject[]
            return {data, error: null}
        } catch (e) {
            console.log(e)
        }
        return {data: [] as IProject[], error: "Error while getting projects"}
    }
)