import * as React from "react"
import {Tabs} from "@mantine/core";
import {Photo, Settings} from "tabler-icons-react";

interface IProps {}

const BugDetailTabs : React.FC<IProps> = () => {
    return <>
        <Tabs>
            <Tabs.Tab label="Details" icon={<Photo size={14} />}>bug tab details</Tabs.Tab>
            <Tabs.Tab label="Update" icon={<Settings size={14} />}>show bug update form here</Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14} />}>show bug history here</Tabs.Tab>
        </Tabs>
    </>
}

export default BugDetailTabs


