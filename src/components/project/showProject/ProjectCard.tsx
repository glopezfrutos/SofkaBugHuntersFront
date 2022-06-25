import * as React from "react"
import {Badge, Card, Grid, Group, List, Text, Title, useMantineTheme} from "@mantine/core";
import {IProject} from "../../../redux/features/projects/projectTypes";
import {getOwners} from "./visual/projectCardVisualUtils";

interface IProps {
    project: IProject
}

/*
* La lista de proyectos debe mostrar en el encabezado, el identificador de proyecto,
* el nombre del proyecto, fechas de inicio y de fin, correo del líder o líderes del proyecto,
* Estado
* */
const ProjectCard: React.FC<IProps> = ({project}) => {
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7]



    const [title, owners] = getOwners(project)
    return (
        <Grid.Col md={4} xl={3}>
            <Card shadow="sm" p="lg">
                <Group>
                    <Text>id: {project.id}</Text>
                    <Title order={4} align='center'>{project.name}</Title>
                </Group>

                <Text>{title}</Text>
                {owners}

                <Group style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Badge color="green" radius="sm" variant="filled">
                        {project.status}
                    </Badge>
                </Group>

                <Group>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        Created at: {project.createdAt}
                    </Text>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        Closed at: {project.closedAt}
                    </Text>
                </Group>
            </Card>
        </Grid.Col>
    )
}

export default ProjectCard


