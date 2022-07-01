import * as React from "react"
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import {useSelector} from "react-redux";
import {selectProjectChosen} from "../../../redux/features/projects/projectSlice";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/app/store";
import {useParams} from "react-router-dom";
import {getOneProjectByIdThunk} from "../../../redux/features/projects/projectThunks";
import {selectTaskList} from "../../../redux/features/tasks/taskSlice";
import {getChildrenTasks} from "../../../redux/features/tasks/taskThunks";
import ProjectDetails from "./ProjectDetails";
import TaskList from "../../task/showTask/TaskList";
import UpdateProjectForm from "../updateProject/UpdateProjectForm";
import {selectLoggedUser} from "../../../redux/features/users/userSlice";

interface IProps {}

const ProjectDetailTabs : React.FC<IProps> = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const loggedUser = useSelector(selectLoggedUser())
    useEffect(() => {
        dispatch(getOneProjectByIdThunk({user: loggedUser, projectId: params.projectId!}))
        dispatch(getChildrenTasks({user: loggedUser, projectId: params.projectId!}))
    }, [])
    const projectChosen = useSelector(selectProjectChosen())
    const taskList = useSelector(selectTaskList())
    return <>
        <Tabs>
            <Tabs.Tab label="Details" icon={<Photo size={14} />}>
                <ProjectDetails project={projectChosen}/>
            </Tabs.Tab>
            <Tabs.Tab label="Tasks" icon={<MessageCircle size={14} />}>
                <TaskList taskList={taskList}/>
            </Tabs.Tab>
            <Tabs.Tab label="Update" icon={<Settings size={14} />}>
                <UpdateProjectForm project={projectChosen}/>
            </Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14} />}>show project history here</Tabs.Tab>
        </Tabs>
    </>
}

export default ProjectDetailTabs


