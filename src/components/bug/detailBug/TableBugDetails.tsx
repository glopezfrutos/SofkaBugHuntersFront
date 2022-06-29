import * as React from "react"
import {Table} from "@mantine/core";
import {IBug} from "../../../redux/features/bugs/bugTypes";

interface IProps {
    bug: IBug
}

const TableBugDetails: React.FC<IProps> = ({bug}) => {
    return <Table>
        <thead>
        <tr>
            <th>Life cycle</th>
            <th>Severity</th>
            <th>Priority</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{bug.lifecycle}</td>
            <td>{bug.severity}</td>
            <td>{bug.priority}</td>
        </tr>
        </tbody>
    </Table>
}

export default TableBugDetails


