import * as React from "react"
import {IBug} from "../../../redux/features/bugs/bugTypes";
import {useSelector} from "react-redux";
import {selectProjectChosen} from "../../../redux/features/projects/projectSlice";
import {selectTaskChosen} from "../../../redux/features/tasks/taskSlice";
import {Accordion, Anchor, Badge, Container, Group, Text, Title} from "@mantine/core";
import {Link} from "react-router-dom";
import DisplayDates from "../../mantine/DisplayDates";

interface IProps {
    bug: IBug
}

const BugDetails : React.FC<IProps> = ({bug}) => {
    const project = useSelector(selectProjectChosen())
    const task = useSelector(selectTaskChosen())
    console.log(project)
    console.log(task)
    /*
    * "createdAt":"2022-05-26",
    * "responsible":"Juan Pablo Allin Cañas",
    * "lifecycle":"DEPLOY",
    * "additionalFile":"https://www.youtube.com/watch?v=KX2YYO1Kwws&ab_channel=codejay",
    * "severity":"LOW",  group
    * "priority":"MID", group
    * "status":"SOLVED",    group
    * "closedAt":"2022-05-28",
    * "solutionResponsible":"Juan Pablo Allin Cañas",
    * */
    const projectPath = `/dashboard/project/${bug.projectId}`
    const taskPath = `${projectPath}/task/${bug.taskId}`
    return <Container>
        <Group my='md'>
            <Title order={3}>{bug.title}</Title>
            <Badge>{bug.status}</Badge>
        </Group>

        <Container mb='md'>
            <Accordion>
                <Accordion.Item label='Description'>
                    <Text>{bug.description}</Text>
                </Accordion.Item>
                <Accordion.Item label='Context'>
                    <Text>{bug.contextInfo}</Text>
                </Accordion.Item>
                <Accordion.Item label='Conclusion'>
                    <Text>{bug.conclusion}</Text>
                </Accordion.Item>
                <Accordion.Item label='Global Issues'>
                    <Text>{bug.globalIssues}</Text>
                </Accordion.Item>
                <Accordion.Item label='Developer observations'>
                    <Text>{bug.developerObservations}</Text>
                </Accordion.Item>
            </Accordion>
        </Container>

        <Group direction='column' spacing='xs'>
            <Anchor component={Link} to={taskPath}>Go to Task</Anchor>
            <Anchor component={Link} to={projectPath}>Go to Project</Anchor>
        </Group>

        <DisplayDates createdAt={bug.createdAt}  closedAt={bug.closedAt}/>

        {JSON.stringify(bug)}
    </Container>
}

export default BugDetails


