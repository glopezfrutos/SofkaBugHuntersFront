import * as React from "react"
import {Title} from "@mantine/core";

interface IProps {}

const AddTaskPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} align='center'>Create new Task</Title>
    </>
}

export default AddTaskPage


