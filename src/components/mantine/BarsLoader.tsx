import * as React from "react"
import {Center, Loader} from "@mantine/core";

interface IProps {}

const BarsLoader : React.FC<IProps> = () => {
    return <Center>
        <Loader color="pink" variant="bars"/>
    </Center>
}

export default BarsLoader


