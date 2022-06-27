import * as React from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";
import {Grid} from "@mantine/core";
import TaskCard from "./TaskCard";

interface IProps {
    taskList: ITask[]
}

const TaskList : React.FC<IProps> = ({taskList}) => {
    const content = taskList.map(task => <TaskCard key={task.id} task={task}/>)
    const grid = <Grid mt='xs'>
        {content}
    </Grid>
    return <>
        {grid}
    </>
}

export default TaskList


