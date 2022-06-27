import * as React from "react"
import {IProject} from "../../../redux/features/projects/projectTypes";
import {Title, Text, Stack, List, Group, Badge} from "@mantine/core";

interface IProps {
    project: IProject
}

const ProjectDetails: React.FC<IProps> = ({project}) => {
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


