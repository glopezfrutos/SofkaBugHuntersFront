import * as React from "react"
import {useState} from "react"
import {IProject} from "../../../redux/features/projects/projectTypes";
import {Accordion, ActionIcon, Badge, Container, Group, List, Modal, Stack, Text, Title} from "@mantine/core";
import {Subtask, Trash} from "tabler-icons-react";
import CreateTaskForm from "../../task/createTask/CreateTaskForm";
import DeleteProjectForm from "../deleteProject/DeleteProjectForm";
import DisplayDates from "../../mantine/DisplayDates";

interface IProps {
    project: IProject
}

const ProjectDetails: React.FC<IProps> = ({project}) => {
    const [opened, setOpened] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const teamMembers = project?.teamEmails?.map(member => <List.Item key={member}>{member}</List.Item>)
    const owners = project?.owners?.map(owner => <List.Item key={owner}>{owner}</List.Item>)


    return <Container>
        <Group my='md'>
            <Container>
                <Title order={3}>{project.name}</Title>
                <Badge size="lg" radius="sm" variant="dot">{project.status}</Badge>
            </Container>

        </Group>


        <Container>

            <Accordion>
                <Accordion.Item label='Description'>
                    <Text>{project.description}</Text>
                </Accordion.Item>
            </Accordion>
        </Container>


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
                <ActionIcon color='red' onClick={() => setOpenDelete(true)}>
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
            <CreateTaskForm project={project}/>
        </Modal>

        <Modal
            size='md'
            opened={openDelete}
            onClose={() => setOpenDelete(false)}
            title={`Are you sure you want to delete ${project.name}?`}
        >
            <DeleteProjectForm project={project}/>
        </Modal>

        <DisplayDates createdAt={project.createdAt}  closedAt={project.closedAt}/>
    </Container>
}

export default ProjectDetails


