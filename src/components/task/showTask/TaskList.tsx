import * as React from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";
import {Center, Grid, Loader} from "@mantine/core";
import TaskCard from "./TaskCard";
import {fetchStatus} from "../../../redux/features/projects/projectTypes";
import {useSelector} from "react-redux";
import {selectProjectFetchStatus} from "../../../redux/features/projects/projectSlice";
import {selectTaskFetchStatus} from "../../../redux/features/tasks/taskSlice";
import BarsLoader from "../../mantine/BarsLoader";

interface IProps {
    taskList: ITask[]
}

const TaskList : React.FC<IProps> = ({taskList}) => {
    const status = useSelector(selectTaskFetchStatus())

    const content = taskList.map(task => <TaskCard key={task.id} task={task}/>)

    const grid = <Grid mt='xs'>
        {content}
    </Grid>
    return <>
        {status === fetchStatus.PENDING && <BarsLoader/>}
        {status === fetchStatus.FULFILLED && grid}
        {status === fetchStatus.REJECTED && <div>Error while fetching</div>}
    </>
}

export default TaskList


