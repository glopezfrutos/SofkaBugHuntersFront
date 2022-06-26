import * as React from "react"
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

interface IProps {}

const DetailTabs : React.FC<IProps> = () => {
    return <>
        <Tabs>
            <Tabs.Tab label="Details" icon={<Photo size={14} />}>Project tab details</Tabs.Tab>
            <Tabs.Tab label="Tasks" icon={<MessageCircle size={14} />}>Messages tab content</Tabs.Tab>
            <Tabs.Tab label="Bugs" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab>
        </Tabs>
    </>
}

export default DetailTabs


