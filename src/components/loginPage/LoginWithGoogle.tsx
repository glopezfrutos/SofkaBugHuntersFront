import * as React from "react"
import {Button} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {auth} from "../../firebaseConfig";
import {signInWithPopup} from "firebase/auth";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {showNotification} from "@mantine/notifications";

interface IProps {
}

const providerGoogleAuth = new GoogleAuthProvider();

const LoginWithGoogle: React.FC<IProps> = () => {
    const navigate = useNavigate()
    const signInWithGoogleButton = () => {
        //    sign up with Google
        signInWithPopup(auth, providerGoogleAuth)
            .then((result) => {
                const user = result.user;
                console.log(user)
                //dispatch
                //navigate
                // navigate('/dashboard')
            }).catch((error) => {
            console.log(error)
            showNotification({
                color: 'red',
                title: 'Oops',
                message: 'Some fields do not match, try again!',
            })
        });
    }


    return <>
        <Button onClick={signInWithGoogleButton} mt="xs" variant="gradient" gradient={{from: 'orange', to: 'red'}}>Google
            log in</Button>
    </>
}

export default LoginWithGoogle


