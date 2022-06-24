import * as React from "react"

interface IProps {}

const LoginPage : React.FC<IProps> = () => {
    const [show, setShow] = React.useState(false)
    return <>
        <p>login</p>
    </>
}

export default LoginPage


