import * as React from "react"
import {Button, Group, Paper, PasswordInput, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import LoginWithGoogle from "./LoginWithGoogle";

interface IProps {
}

const LoginForm: React.FC<IProps> = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //    logic
        console.log(Object.values(form.values).every(Boolean))
    }
    return <>
        <Paper shadow="xs" p="xl">
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="Your email"
                    label="Email"
                    required
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    placeholder="Password"
                    label="Password"
                    required
                    {...form.getInputProps('password')}
                />
                <Group>
                    <Button color="cyan" type="submit" mt="xs">
                        Login
                    </Button>
                    <LoginWithGoogle/>
                </Group>
            </form>
        </Paper>
    </>
}

export default LoginForm


