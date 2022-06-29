import * as React from "react"
import {Accordion, Text} from "@mantine/core";
import {IBug} from "../../../redux/features/bugs/bugTypes";

interface IProps {
    bug: IBug
}

const AccordionBugDetails: React.FC<IProps> = ({bug}) => {
    return <Accordion>
        <Accordion.Item label='Description'>
            <Text>{bug.description}</Text>
        </Accordion.Item>
        <Accordion.Item label='Context'>
            <Text>{bug.contextInfo}</Text>
        </Accordion.Item>
        <Accordion.Item label='Conclusion'>
            <Text>{bug.conclusion}</Text>
        </Accordion.Item>
        <Accordion.Item label='Global Issues'>
            <Text>{bug.globalIssues}</Text>
        </Accordion.Item>
        <Accordion.Item label='Additional Files'>
            <Text>{bug.additionalFile}</Text>
        </Accordion.Item>
        <Accordion.Item label='Developer observations'>
            <Text>{bug.developerObservations}</Text>
        </Accordion.Item>
    </Accordion>
}

export default AccordionBugDetails


