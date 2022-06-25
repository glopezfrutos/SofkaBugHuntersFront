import * as React from "react"
import CreateTaskForm from "../../../components/task/createTask/CreateTaskForm";
import {Title} from "@mantine/core";

interface IProps {}

const AddTaskPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} align='center'>Create new Task</Title>
        <CreateTaskForm/>
    </>
}

export default AddTaskPage


