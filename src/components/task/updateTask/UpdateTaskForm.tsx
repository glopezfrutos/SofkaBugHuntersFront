import * as React from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";

interface IProps {
    task: ITask
}

const UpdateTaskForm : React.FC<IProps> = ({task}) => {
    return <>
        task update form
    </>
}

export default UpdateTaskForm


