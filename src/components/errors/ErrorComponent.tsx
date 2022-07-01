import * as React from "react"
import {Button, Container, Text} from "@mantine/core";

interface IProps {}

const ErrorComponent : React.FC<IProps> = () => {
    return <Container>
        <Text>There was an Error while fetching</Text>
    </Container>
}

export default ErrorComponent


