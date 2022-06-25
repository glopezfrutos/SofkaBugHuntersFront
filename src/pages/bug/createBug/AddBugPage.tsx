import * as React from "react"
import BugForm from "../../../components/bug/createBug/BugForm";
import {Title} from "@mantine/core";

interface IProps {
}

const AddBugPage: React.FC<IProps> = () => {
    return <>
        <Title order={3} align='center'>Create new Bug</Title>
        <BugForm/>
    </>
}

export default AddBugPage


