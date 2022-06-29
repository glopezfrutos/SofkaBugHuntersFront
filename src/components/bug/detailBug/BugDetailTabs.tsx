import * as React from "react"
import {useEffect} from "react"
import {Tabs} from "@mantine/core";
import {Photo, Settings} from "tabler-icons-react";
import BugDetails from "./BugDetails";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../redux/app/store";
import {getBugById} from "../../../redux/features/bugs/bugThunks";
import {useSelector} from "react-redux";
import {selectBugChosen} from "../../../redux/features/bugs/bugSlice";
import BugSpecificDetails from "./BugSpecificDetails";

interface IProps {}

const BugDetailTabs : React.FC<IProps> = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBugById(params.bugId!))
    }, [])
    const bugChosen = useSelector(selectBugChosen())
    return <>
        <Tabs>
            <Tabs.Tab label="General" icon={<Photo size={14} />}>
                <BugDetails bug={bugChosen}/>
            </Tabs.Tab>
            <Tabs.Tab label="Specific" icon={<Photo size={14} />}>
                <BugSpecificDetails bug={bugChosen}/>
            </Tabs.Tab>
            <Tabs.Tab label="Update" icon={<Settings size={14} />}>show bug update form here</Tabs.Tab>
            <Tabs.Tab label="History" icon={<Settings size={14} />}>show bug history here</Tabs.Tab>
        </Tabs>
    </>
}

export default BugDetailTabs


