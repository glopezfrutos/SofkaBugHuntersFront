import * as React from "react"
import {Button, Paper, PasswordInput, TextInput} from "@mantine/core";

interface IProps {}

const SignupForm : React.FC<IProps> = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return <>
        <Paper shadow="xs" p="xl">
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="Your email"
                    label="Email"
                    required/>
                <PasswordInput
                    placeholder="Password"
                    label="Password"
                    required
                />
                <PasswordInput
                    placeholder="Confirm password"
                    label="Confirm Password"
                    required
                />
                <Button color="cyan" type="submit" mt="xs">
                    Sign up
                </Button>
            </form>
        </Paper>
    </>
}

export default SignupForm


