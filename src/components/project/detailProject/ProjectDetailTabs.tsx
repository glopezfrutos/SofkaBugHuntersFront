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

interface IProps {}

const ProjectDetailTabs : React.FC<IProps> = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getOneProjectByIdThunk(params.projectId!))
        dispatch(getChildrenTasks(params.projectId!))
    }, [])
    const projectChosen = useSelector(selectProjectChosen())
    const taskList = useSelector(selectTaskList())
    console.log(projectChosen)
    console.log(taskList)
    return <>
        <Tabs>
            <Tabs.Tab label="Details" icon={<Photo size={14} />}>
                <ProjectDetails project={projectChosen}/>
            </Tabs.Tab>
            <Tabs.Tab label="Tasks" icon={<MessageCircle size={14} />}>show tasks here</Tabs.Tab>
            <Tabs.Tab label="Update" icon={<Settings size={14} />}>show project update form here</Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14} />}>show project history here</Tabs.Tab>
        </Tabs>
    </>
}

export default ProjectDetailTabs


