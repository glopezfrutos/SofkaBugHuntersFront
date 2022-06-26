import * as React from "react"
import {Button, Group, Paper, PasswordInput, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig";
import {showNotification} from "@mantine/notifications";

interface IProps {
}

const SignupForm: React.FC<IProps> = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {email, password, confirmPassword} = form.values
        if (email && (password === confirmPassword)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential)
                //    dispatch
                //    navigate
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            console.log("error/ show notification")
            showNotification({
                color: 'red',
                title: 'Oops',
                message: 'Some fields do not match, try again!',
            })
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
                <Group grow>
                    <PasswordInput
                        placeholder="Password"
                        label="Password"
                        required
                        {...form.getInputProps('password')}

                    />
                    <PasswordInput
                        placeholder="Confirm password"
                        label="Confirm Password"
                        required
                        {...form.getInputProps('confirmPassword')}

                    />
                </Group>
                <Button color="cyan" type="submit" mt="xs">
                    Sign up
                </Button>
            </form>
        </Paper>
    </>
}

export default SignupForm


