import * as React from "react"
import {Button, Container, Group, Text} from "@mantine/core";
import {IBug} from "../../../redux/features/bugs/bugTypes";
import BugTitle from "./BugTitle";
import TableBugDetails from "./TableBugDetails";
import GroupBugResponsible from "./GroupBugResponsible";

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
    return <Container>
        <BugTitle bug={bug}/>

        <GroupBugResponsible bug={bug}/>

        <TableBugDetails bug={bug}/>

        <Button color='red'>Delete</Button>
    </Container>
}

export default BugSpecificDetails


