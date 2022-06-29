import {fetchStatus} from "../projects/projectTypes";

export interface ITaskInitialState {
    taskList: ITask[]
    taskChosen: ITask
    error: null | string
    fetchStatus: fetchStatus
}

export interface ITask {
    id?: string
    projectId: string,
    projectName: string,
    name: string,
    createdAt: string,
    closedAt: string,
    tag: string[]
    description: string,
    additionalFilesId: string[],
    responsibleEmail: string[],
    status?: string,
}