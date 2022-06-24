import * as React from "react"
import {Container, Tabs} from "@mantine/core";
import LoginForm from "./LoginForm";
import {HandClick, Login} from "tabler-icons-react";
import SignupForm from "./SignupForm";

interface IProps {
}

const LoginTabs: React.FC<IProps> = () => {
    return <Container size="xs" px="xs" my="xl">
        <Tabs>
            <Tabs.Tab label="Login" icon={<Login size={14}/>}>
                <LoginForm/>
            </Tabs.Tab>
            <Tabs.Tab label="Sign up" icon={<HandClick size={14}/>}>
                <SignupForm/>
            </Tabs.Tab>
        </Tabs>
    </Container>
}

export default LoginTabs


