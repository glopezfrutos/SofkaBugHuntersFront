import * as React from "react"
import {IBug} from "../../../redux/features/bugs/bugTypes";

interface IProps {
    bug: IBug
}

const BugDetails : React.FC<IProps> = ({bug}) => {
    return <>
        {JSON.stringify(bug)}
    </>
}

export default BugDetails


