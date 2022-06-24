import * as React from "react"
import {Badge, Card, Grid, Group, Text, Title, useMantineTheme} from "@mantine/core";
import {IProject} from "../../../redux/features/projects/projectTypes";

interface IProps {
    project: IProject
}


const ProjectCard : React.FC<IProps> = ({project: {name, status, members}}) => {
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];
    return (
        <Grid.Col md={6} xl={3} >
            <Card shadow="sm" p="lg">
                <Group>
                    <Title order={4} align='center'>title</Title>
                </Group>

                <Group style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>data</Text>
                    <Badge color="pink" variant="light">
                        status
                    </Badge>

                </Group>

                <Group>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        Phone
                    </Text>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        City
                    </Text>
                </Group>
            </Card>
        </Grid.Col>
    )
}

export default ProjectCard


