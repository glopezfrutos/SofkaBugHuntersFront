import * as React from "react"
import {IBug} from "../../../redux/features/bugs/bugTypes";
import {Grid} from "@mantine/core";
import BugCard from "./BugCard";

interface IProps {
    bugsList: IBug[]
}

const BugList : React.FC<IProps> = ({bugsList}) => {
    // console.log(bugsList)
    const content = bugsList.map(bug => <BugCard key={bug.id} bug={bug}/>)

    const grid = <Grid mt='xs'>
        {content}
    </Grid>

    return <>
        {grid}
    </>
}

export default BugList


