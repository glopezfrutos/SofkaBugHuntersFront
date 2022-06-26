
export interface IProjectInitialState {
    projectList: IProject[]
    error: null | string
    fetchStatus: fetchStatus
}

export interface IProject {
    id ?: string
    name: string
    description: string
    teamEmails: string[]
    owners: string[]
    tasks: ITask[]
    createdAt: string
    closedAt: string
    status: string
}

export interface ITask  {
    id ?: string
    projectId: string,
    // projectName: string,
    name: string,
    createdAt: string,
    closedAt: string,
    tag: string[]
    bugs: IBug[]
    description: string,
    additionalFilesId: string,
    responsibleEmail: string,
    status: string,
}

interface IBug  {
    id ?: string,
    projectId: string,
    taskId: string,
    title: string,
    description: string,
    createdAt: string,
    responsible: string,
    contextInfo: string,
    lifecycle: string,  // Enum: (Planificación; Análisis; Diseño; Implementación; Pruebas; Despliegue; Uso o mantenimiento).
    additionalFile: string,
    severity: string,  // Enum: (Bajo; Medio; Alto)
    priority: string,  // Enum: (Bajo; Medio; Alto)
    status: string,  // Enum: (asignado, cancelado, rechazado, cerrado con defectos, reinsidente, solucionado
    conclusion: string,
    globalIssues: string,
    references: string,
    closedA: string,
    solutionResponsible: string,
    developerObservations: string
}

export enum fetchStatus {
    IDLE = 'IDLE',
    PENDING='PENDING',
    REJECTED = 'REJECTED',
    FULFILLED = 'FULFILLED'
}