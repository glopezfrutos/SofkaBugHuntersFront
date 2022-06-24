import * as React from "react"
import LoginTabs from "../../components/loginPage/LoginTabs";
import {Title} from "@mantine/core";
import {Bug} from "tabler-icons-react";

interface IProps {}

const LoginPage : React.FC<IProps> = () => {
    return <>
        <Title align='center'> Bug tracker <Bug/></Title>
        <LoginTabs/>
    </>
}

export default LoginPage


