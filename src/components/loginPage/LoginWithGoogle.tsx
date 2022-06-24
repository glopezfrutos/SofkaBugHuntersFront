import * as React from "react"
import {Button} from "@mantine/core";
import {useNavigate} from "react-router-dom";

interface IProps {
}

const LoginWithGoogle: React.FC<IProps> = () => {
    const navigate = useNavigate()
    const signInWithGoogleButton = () => {
        //    sign up with google
    }

    return <>
        <Button onClick={signInWithGoogleButton} mt="xs" variant="gradient" gradient={{from: 'orange', to: 'red'}}>Google
            log in</Button>
    </>
}

export default LoginWithGoogle


