import * as React from "react"
import {useState} from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";
import {Accordion, ActionIcon, Badge, Container, Group, List, Modal, Stack, Text, Title} from "@mantine/core";
import {Bug, Trash} from "tabler-icons-react";
import BugForm from "../../bug/createBug/BugForm";
import DeleteTaskForm from "../deleteTask/DeleteTaskForm";
import DisplayDates from "../../mantine/DisplayDates";

interface IProps {
    task: ITask
}

const TaskDetails: React.FC<IProps> = ({task}) => {
    const [opened, setOpened] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
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
                {additionalFiles?.length &&
                    <>
                        <Text>Files:</Text>
                        <List>
                            {additionalFiles}
                        </List>
                    </>
                }
            </Container>
        </Group>

        <Group my='md'>
            <Container>
                <Text>Add a bug</Text>
                <ActionIcon color='teal' onClick={() => setOpened(true)}>
                    <Bug/>
                </ActionIcon>
            </Container>
            <Container>
                <Text>Delete task</Text>
                <ActionIcon color='red' onClick={() => setOpenDelete(true)}>
                    <Trash/>
                </ActionIcon>
            </Container>
        </Group>
        <Modal
            size='md'
            opened={opened}
            onClose={() => setOpened(false)}
            title={`Adding new bug to ${task.name}`}
        >
            <BugForm task={task}/>
        </Modal>

        <Modal
            size='md'
            opened={openDelete}
            onClose={() => setOpenDelete(false)}
            title={`Are you sure you want to delete ${task.name}?`}
        >
            <DeleteTaskForm task={task}/>
        </Modal>


        <Container my='md'>
            {task.tag && <Text color='dimmed'>Tags: {tags}</Text>}
        </Container>
       <DisplayDates createdAt={task.createdAt} closedAt={task.closedAt}/>
    </Container>
}

export default TaskDetails


