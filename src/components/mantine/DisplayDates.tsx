import * as React from "react"
import {Stack, Text} from "@mantine/core";

interface IProps {
    createdAt: string,
    closedAt ?: string
}

const DisplayDates : React.FC<IProps> = ({createdAt, closedAt}) => {
    return <>
        <Stack mt='xs' align="center" justify="flex-start" spacing="sm" sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        })}>
            <Text>Created at: {createdAt}</Text>
            {closedAt && <Text>Closed at: {closedAt}</Text>}
        </Stack>
    </>
}

export default DisplayDates


