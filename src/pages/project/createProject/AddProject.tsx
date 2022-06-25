import * as React from "react"
import CreateProjectForm from "../../../components/project/createProject/CreateProjectForm";
import {Title} from "@mantine/core";

interface IProps {}

const AddProject : React.FC<IProps> = () => {
    return <>
        <Title order={3} align='center'>Create new Project</Title>
        <CreateProjectForm/>
    </>
}

export default AddProject


