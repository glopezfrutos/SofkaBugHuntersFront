import * as React from "react"
import CreateTaskForm from "../../../components/task/createTask/CreateTaskForm";

interface IProps {}

const AddTaskPage : React.FC<IProps> = () => {
    return <>
        <CreateTaskForm/>
    </>
}

export default AddTaskPage


