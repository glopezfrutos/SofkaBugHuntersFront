import * as React from "react"
import {Badge, Group, Title} from "@mantine/core";
import {IBug} from "../../../redux/features/bugs/bugTypes";

interface IProps {
    bug: IBug
}

const BugTitle: React.FC<IProps> = ({bug}) => {
    return <Group my='md'>
        <Title order={3}>{bug.title}</Title>
        <Badge>{bug.status}</Badge>
    </Group>
}

export default BugTitle


