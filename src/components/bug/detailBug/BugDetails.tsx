import * as React from "react"
import {IBug} from "../../../redux/features/bugs/bugTypes";
import {useSelector} from "react-redux";
import {selectProjectChosen} from "../../../redux/features/projects/projectSlice";
import {selectTaskChosen} from "../../../redux/features/tasks/taskSlice";
import {Accordion, Anchor, Badge, Container, Group, Text, Title} from "@mantine/core";
import {Link} from "react-router-dom";
import DisplayDates from "../../mantine/DisplayDates";
import AccordionBugDetails from "./AccordionBugDetails";
import BugTitle from "./BugTitle";

interface IProps {
    bug: IBug
}

const BugDetails: React.FC<IProps> = ({bug}) => {
    const project = useSelector(selectProjectChosen())
    const task = useSelector(selectTaskChosen())

    const projectPath = `/dashboard/project/${bug.projectId}`
    const taskPath = `${projectPath}/task/${bug.taskId}`
    return <Container>
        <BugTitle bug={bug}/>
        <Container mb='md'>
            <AccordionBugDetails bug={bug}/>
        </Container>

        <Group direction='column' spacing='xs'>
            <Anchor component={Link} to={taskPath}>Go to Task</Anchor>
            <Anchor component={Link} to={projectPath}>Go to Project</Anchor>
        </Group>

        <DisplayDates createdAt={bug.createdAt} closedAt={bug.closedAt}/>

        {/*{JSON.stringify(bug)}*/}
    </Container>
}

export default BugDetails


