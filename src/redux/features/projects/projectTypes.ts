
export interface IProjectInitialState {
    projectList: IProject[]
    projectChosen: IProject
    error: null | string
    fetchStatus: fetchStatus
}

export interface IProject {
    id ?: string
    name: string
    description: string
    teamEmails: string[]
    owners: string[]
    createdAt: string
    closedAt: string
    status: string
}



export enum fetchStatus {
    IDLE = 'IDLE',
    PENDING='PENDING',
    REJECTED = 'REJECTED',
    FULFILLED = 'FULFILLED'
}