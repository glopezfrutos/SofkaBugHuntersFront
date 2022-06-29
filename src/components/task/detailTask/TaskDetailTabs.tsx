import * as React from "react"
import {useEffect} from "react"
import {Tabs} from "@mantine/core";
import {MessageCircle, Photo, Settings} from "tabler-icons-react";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../redux/app/store";
import {getTaskById} from "../../../redux/features/tasks/taskThunks";
import {getChildrenBugs} from "../../../redux/features/bugs/bugThunks";
import {useSelector} from "react-redux";
import {selectTaskChosen} from "../../../redux/features/tasks/taskSlice";
import {selectBugList} from "../../../redux/features/bugs/bugSlice";
import TaskDetails from "./TaskDetails";
import BugList from "../../bug/showBugs/BugList";
import UpdateTaskForm from "../updateTask/UpdateTaskForm";

interface IProps {
}

const TaskDetailTabs: React.FC<IProps> = () => {
    //dispatch getTaskById
    const params = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTaskById(params.taskId!))
        dispatch(getChildrenBugs(params.taskId!))
    }, [])
    const taskChosen = useSelector(selectTaskChosen())
    const bugsList = useSelector(selectBugList())
    return <>
        <Tabs>
            <Tabs.Tab label="Details" icon={<Photo size={14}/>}>
                <TaskDetails task={taskChosen}/>
            </Tabs.Tab>
            <Tabs.Tab label="Bugs" icon={<MessageCircle size={14}/>}>
                <BugList bugsList={bugsList}/>
            </Tabs.Tab>
            <Tabs.Tab label="Update" icon={<Settings size={14}/>}>
                <UpdateTaskForm task={taskChosen}/>
            </Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14}/>}>show task history here</Tabs.Tab>
        </Tabs>
    </>
}

export default TaskDetailTabs


