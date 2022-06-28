import * as React from "react"
import {useState} from "react"
import {IProject} from "../../../redux/features/projects/projectTypes";
import {Accordion, ActionIcon, Badge, Container, Group, List, Modal, Stack, Text, Title} from "@mantine/core";
import {Subtask, Trash} from "tabler-icons-react";
import CreateTaskForm from "../../task/createTask/CreateTaskForm";

interface IProps {
    project: IProject
}

const ProjectDetails: React.FC<IProps> = ({project}) => {
    const [opened, setOpened] = useState(false);
    const teamMembers = project?.teamEmails?.map(member => <List.Item key={member}>{member}</List.Item>)
    const owners = project?.owners?.map(owner => <List.Item key={owner}>{owner}</List.Item>)

    return <Container>
        <Group my='md'>
            <Title order={3}>{project.name}</Title>
            <Badge size="lg" radius="sm" variant="dot">{project.status}</Badge>
        </Group>


        <Accordion>
            <Accordion.Item label='Description'>
                <Text>{project.description}</Text>
            </Accordion.Item>
        </Accordion>


        <Group my='md'>
            <Container>

                <Text>Members:</Text>
                <List>
                    {teamMembers}
                </List>
            </Container>
            <Container>
                <Text>Owners:</Text>
                <List>
                    {owners}
                </List>
            </Container>
        </Group>


        <Group my='md'>
            <Container>
                <Text>Add a task</Text>
                <ActionIcon color='yellow' onClick={() => setOpened(true)}>
                    <Subtask/>
                </ActionIcon>
            </Container>
            <Container>
                <Text>Delete project</Text>
                <ActionIcon color='red' onClick={() => setOpened(true)}>
                    <Trash/>
                </ActionIcon>
            </Container>
        </Group>
        <Modal
            size='md'
            opened={opened}
            onClose={() => setOpened(false)}
            title={`Adding new task to ${project.name}`}
        >
            <CreateTaskForm projectId={project.id!} projectName={project.name}/>
        </Modal>

        <Stack my='lg' align="center" justify="flex-start" spacing="sm" sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            height: 300
        })}>
            <Text>Created at: {project.createdAt}</Text>
            {
                project.closedAt &&
                <Text>Closed at: {project.closedAt}</Text>
            }
        </Stack>
    </Container>
}

export default ProjectDetails


