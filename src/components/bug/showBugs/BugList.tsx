import * as React from "react"
import {IBug} from "../../../redux/features/bugs/bugTypes";

interface IProps {
    bugsList: IBug[]
}

const BugList : React.FC<IProps> = ({bugsList}) => {

    return <>bug list</>
}

export default BugList


