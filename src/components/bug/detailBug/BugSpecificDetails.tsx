import * as React from "react"
import {ActionIcon, Button, Container, Group, Modal, Text} from "@mantine/core";
import {IBug} from "../../../redux/features/bugs/bugTypes";
import BugTitle from "./BugTitle";
import TableBugDetails from "./TableBugDetails";
import GroupBugResponsible from "./GroupBugResponsible";
import {Trash} from "tabler-icons-react";
import DeleteTaskForm from "../../task/deleteTask/DeleteTaskForm";
import {useState} from "react";
import DeleteBugForm from "../deleteBug/DeleteBugForm";

interface IProps {
    bug: IBug
}

/*
* "responsible":"Juan Pablo Allin Cañas",
* "solutionResponsible":"Juan Pablo Allin Cañas",
* "lifecycle":"DEPLOY",
* "severity":"LOW",  group
* "priority":"MID", group
* "status":"SOLVED",    group
* "client importance":"SOLVED",    group
* */
const BugSpecificDetails: React.FC<IProps> = ({bug}) => {
    const [openDelete, setOpenDelete] = useState(false);

    return <Container>
        <BugTitle bug={bug}/>


        <GroupBugResponsible bug={bug}/>

        <TableBugDetails bug={bug}/>

        <Group position='right'>
            <ActionIcon color='red' onClick={() => setOpenDelete(true)}>
                <Trash/>
            </ActionIcon>
        </Group>
        <Modal
            size='md'
            opened={openDelete}
            onClose={() => setOpenDelete(false)}
            title={`Are you sure you want to delete ${bug.title}?`}
        >
            <DeleteBugForm bug={bug}/>
        </Modal>

    </Container>
}

export default BugSpecificDetails


