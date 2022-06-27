import * as React from "react"
import {IProject} from "../../../redux/features/projects/projectTypes";

interface IProps {
    project: IProject
}

const ProjectDetails: React.FC<IProps> = ({project}) => {
    return <>
        Project tab details// add new task modal form
        {JSON.stringify(project, null,4)}
    </>
}

export default ProjectDetails


