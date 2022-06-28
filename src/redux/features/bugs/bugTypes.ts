import {fetchStatus} from "../projects/projectTypes";

export interface IBugInitalState {
    bugsList: IBug[]
    bugChosen: IBug
    error: string | null
    fetchStatus: fetchStatus
}

export interface IBug  {
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