import * as React from "react"
import ProjectDetailTabs from "../../../components/project/detailProject/ProjectDetailTabs";
import {useParams} from "react-router-dom";

interface IProps {
}

const ProjectDetailsPage: React.FC<IProps> = () => {
    const params = useParams()
    console.log(params)
    return <>
        <ProjectDetailTabs/>
    </>
}

export default ProjectDetailsPage


