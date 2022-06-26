import * as React from "react"
import {Button, Group, Paper, PasswordInput, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import LoginWithGoogle from "./LoginWithGoogle";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig";
import {showNotification} from "@mantine/notifications";

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
        const {email, password} = form.values
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)
                    //dispatch
                    //navigate
                })
                .catch((error) => {
                    console.log(error.message)
                    showNotification({
                        color: 'red',
                        title: 'Oops',
                        message: 'Some fields do not match, try again!',
                    })
                });
        }
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


