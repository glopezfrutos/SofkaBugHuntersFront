import * as React from "react"
import {IBug} from "../../../redux/features/bugs/bugTypes";
import {Anchor, Badge, Card, Grid, Group, Text, Title, useMantineTheme} from "@mantine/core";
import {Link} from "react-router-dom";

interface IProps {
    bug: IBug
}

const BugCard : React.FC<IProps> = ({bug}) => {
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7]

    //path='project/:projectId/task/:taskId/bug/:bugId'
    const path = `/dashboard/project/${bug.projectId}/task/${bug.taskId}/bug/${bug.id}`
    return <Grid.Col md={4} xl={3}>
        <Card shadow="sm" p="lg">
            <Group>
                <Anchor component={Link} to={path}>{bug.id}</Anchor>
                <Title order={4} align='center'>{bug.title}</Title>
            </Group>

            <Text>Responsable: {bug.responsible}</Text>

            <Group style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                <Badge color="green" radius="sm" variant="filled">
                    {bug.status}
                </Badge>
            </Group>

            <Group>
                <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                    Created at: {bug.createdAt}
                </Text>
                <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                    Closed at: {bug.closedAt}
                </Text>
            </Group>
        </Card>
    </Grid.Col>
}

export default BugCard


