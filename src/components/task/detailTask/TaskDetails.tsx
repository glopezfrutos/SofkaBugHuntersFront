import * as React from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";

interface IProps {
    task: ITask
}

const TaskDetails : React.FC<IProps> = ({task}) => {
    return <>
        {JSON.stringify(task)}
    </>
}

export default TaskDetails


