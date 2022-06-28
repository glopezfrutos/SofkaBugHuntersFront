import * as React from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";
import {Accordion, Badge, Container, Group, List, Stack, Text, Title} from "@mantine/core";

interface IProps {
    task: ITask
}

const TaskDetails: React.FC<IProps> = ({task}) => {
    /*
    {

    "additionalFilesId": ["link1", "link2"],
    "responsibleEmail": ["diego", "fer", "kelly"]
}
    * */
    const additionalFiles = task?.additionalFilesId?.map(file => <List.Item key={file}>{file}</List.Item>)
    const responsibleEmails = task?.responsibleEmail?.map(responsible => <List.Item
        key={responsible}>{responsible}</List.Item>)
    const tags = task?.tag?.map(tag => <Badge color="cyan" variant="filled" key={tag}>{tag}</Badge>)
    return <Container>
        <Group my='md'>
            <Container>
                <Title order={3}>{task.name}</Title>
                <Text color='dimmed'>{task.projectName}</Text>
                <Badge size="lg" radius="sm" variant="dot">{task.status}</Badge>
            </Container>
        </Group>
        <Container>

            <Accordion>
                <Accordion.Item label='Description'>
                    <Text>{task.description}</Text>
                </Accordion.Item>
            </Accordion>
        </Container>

        <Group my='md'>
            <Container>

                <Text>Responsible Emails:</Text>
                <List>
                    {responsibleEmails}
                </List>
            </Container>
            <Container>
                {additionalFiles.length &&
                    <>
                        <Text>Files:</Text>
                        <List>
                            {additionalFiles}
                        </List>
                    </>
                }
            </Container>
        </Group>

        <Container my='md'>
            {task.tag && <Text color='dimmed'>Tags: {tags}</Text>}
        </Container>
        <Stack my='lg' align="center" justify="flex-start" spacing="sm" sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            height: 300
        })}>
            <Text>Created at: {task.createdAt}</Text>
            {task.closedAt && <Text>Closed at: {task.closedAt}</Text>}
        </Stack>
    </Container>
}

export default TaskDetails


