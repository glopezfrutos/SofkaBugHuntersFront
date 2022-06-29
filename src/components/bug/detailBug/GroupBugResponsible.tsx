import * as React from "react"
import {Group, Text} from "@mantine/core";
import {IBug} from "../../../redux/features/bugs/bugTypes";

interface IProps {
    bug: IBug
}

const GroupBugResponsible: React.FC<IProps> = ({bug}) => {
    return <>
        <Group>
            <Text underline>Responsible: </Text>
            <Text>{bug.responsible}</Text>
        </Group>
        <Group>
            <Text underline>Solver: </Text>
            <Text>{bug.solutionResponsible}</Text>
        </Group>
    </>
}

export default GroupBugResponsible


