import * as React from "react"
import {Anchor, Badge, Card, Grid, Group, Text, Title, useMantineTheme} from "@mantine/core";
import {Link} from "react-router-dom";
import {ITask} from "../../../redux/features/tasks/taskTypes";

interface IProps {
    task: ITask
}

const TaskCard : React.FC<IProps> = ({task}) => {
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7]


    return <Grid.Col md={4} xl={3}>
            <Card shadow="sm" p="lg">
                <Group>
                    <Anchor component={Link} to={`/dashboard/project/${task.projectId}/task/${task.id}`}>{task.id}</Anchor>
                    <Title order={4} align='center'>{task.name}</Title>
                </Group>

                <Text>Responsable: {task.responsibleEmail}</Text>

                <Group style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Badge color="green" radius="sm" variant="filled">
                        {task.status}
                    </Badge>
                </Group>

                <Group>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        Created at: {task.createdAt}
                    </Text>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        Closed at: {task.closedAt}
                    </Text>
                </Group>
            </Card>
        </Grid.Col>
}

export default TaskCard


