import {IProject} from "../../../../redux/features/projects/projectTypes";
import {List, Text} from "@mantine/core";
import * as React from "react";

export const getOwners = ({owners}: IProject): [string, JSX.Element] => {
    const singular = 'Owner'
    const plural = 'Owners'
    const defaultText = 'None'
    if (owners.length > 1) {
        const items = owners.map((owner, index) => <List.Item key={`${owner}${index}`}>{owner}</List.Item>)
        const jsx = <List>{items}</List>
        return [plural, jsx]
    }
    const jsx = <Text weight={500}>{owners.at(0) || defaultText}</Text>
    return [singular, jsx]
}
