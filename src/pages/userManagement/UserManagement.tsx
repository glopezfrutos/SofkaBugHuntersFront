import * as React from "react"
import {Title} from "@mantine/core";
import UpdateUserRoleForm from "../../components/userManagement/UpdateUserRoleForm";

interface IProps {}

const UserManagement: React.FC<IProps> = () => {
    return <>
        <Title order={3} align='center'>User management</Title>
        <UpdateUserRoleForm/>
    </>
}

export default UserManagement


