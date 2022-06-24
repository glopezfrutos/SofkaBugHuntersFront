import * as React from "react"
import {Button, Paper, PasswordInput, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";

interface IProps {
}

const LoginForm: React.FC<IProps> = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form.values)
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
                <Button color="cyan" type="submit" mt="xs">
                    Login
                </Button>
            </form>
            {/*<Center>*/}
            {/*    <LoginWithGoogle/>*/}
            {/*</Center>*/}
        </Paper>
    </>
}

export default LoginForm


