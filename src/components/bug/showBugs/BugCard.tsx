import * as React from "react"
import {IBug} from "../../../redux/features/bugs/bugTypes";

interface IProps {
    bug: IBug
}

const BugCard : React.FC<IProps> = ({bug}) => {
    return <>Bug card</>
}

export default BugCard


