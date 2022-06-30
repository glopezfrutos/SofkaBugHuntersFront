import {fetchStatus} from "../projects/projectTypes";

export interface IUserInitialState  {
    usersList: IUser[]
    loggedUser: IUser
    fetchStatus : fetchStatus
    error: null | string
}

export interface IUser {
    id?: string
    enable?: boolean
    email: string
    role?: string // Enum: ADMIN, TESTER, DEVELOPER, READER (default);
    sessionId?: string
}
