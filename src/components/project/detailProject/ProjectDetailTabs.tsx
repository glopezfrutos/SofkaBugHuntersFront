import * as React from "react"
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

interface IProps {}

const ProjectDetailTabs : React.FC<IProps> = () => {
    //double dispatch here

    return <>
        <Tabs>
            <Tabs.Tab label="Details" icon={<Photo size={14} />}>Project tab details// add new task modal form</Tabs.Tab>
            <Tabs.Tab label="Tasks" icon={<MessageCircle size={14} />}>show tasks here</Tabs.Tab>
            <Tabs.Tab label="Update" icon={<Settings size={14} />}>show project update form here</Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14} />}>show project history here</Tabs.Tab>
        </Tabs>
    </>
}

export default ProjectDetailTabs


