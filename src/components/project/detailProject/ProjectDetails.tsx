import * as React from "react"
import {IProject} from "../../../redux/features/projects/projectTypes";
import {Title, Text, Stack, List, Group, Badge, ActionIcon, Modal} from "@mantine/core";
import {SquarePlus} from "tabler-icons-react";
import {useState} from "react";
import CreateTaskForm from "../../task/createTask/CreateTaskForm";

interface IProps {
    project: IProject
}

const ProjectDetails: React.FC<IProps> = ({project}) => {
    const [opened, setOpened] = useState(false);
    const teamMembers = project?.teamEmails?.map(member => <List.Item key={member}>{member}</List.Item>)
    const owners = project?.owners?.map(owner => <List.Item key={owner}>{owner}</List.Item>)
    return <>

        <Title order={3}>Project title: {project.name}</Title>
        <Badge size="lg" radius="sm" variant="dot">{project.status}</Badge>
        <Text>Description: {project.description}</Text>
        <Group>
            <Text>Members:</Text>
            <List>
                {teamMembers}
            </List>
        </Group>
        <Text>Owner:</Text>
        <List>
            {owners}
        </List>

        <Group>
        <Text>Add new Task:</Text>
        <ActionIcon color='yellow' onClick={() => setOpened(true)}>
            <SquarePlus  />
        </ActionIcon>
        </Group>
        <Modal
            size='md'
            opened={opened}
            onClose={() => setOpened(false)}
            title={`Adding new task to ${project.name}`}
        >
            <CreateTaskForm projectId={project.id!} projectName={project.name}/>
        </Modal>

        <Stack align="center" justify="flex-start" spacing="sm" sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            height: 300
        })}>
            <Text>Created at: {project.createdAt}</Text>
            {
                project.closedAt &&
                <Text>Closed at: {project.closedAt}</Text>
            }
        </Stack>
    </>
}

export default ProjectDetails


