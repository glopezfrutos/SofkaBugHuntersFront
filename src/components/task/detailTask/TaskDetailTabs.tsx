import * as React from "react"
import {Tabs} from "@mantine/core";
import {MessageCircle, Photo, Settings} from "tabler-icons-react";

interface IProps {}

const TaskDetailTabs : React.FC<IProps> = () => {
    return <>
        <Tabs>
            <Tabs.Tab label="Details" icon={<Photo size={14} />}>task tab details// add new bug modal form</Tabs.Tab>
            <Tabs.Tab label="Bugs" icon={<MessageCircle size={14} />}>show bugs here</Tabs.Tab>
            <Tabs.Tab label="Update" icon={<Settings size={14} />}>show task update form here</Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14} />}>show task history here</Tabs.Tab>
        </Tabs>
    </>
}

export default TaskDetailTabs


