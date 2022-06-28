import * as React from "react"
import {useState} from "react"
import {Button, Container, MultiSelect, Text, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {useForm} from "@mantine/form";
import {IProject} from "../../../redux/features/projects/projectTypes";

interface IProps {
    project: IProject
}

const CreateTaskForm : React.FC<IProps> = ({project}) => {
    //multiple select data
    const [tagsData, setTagsData] = useState(['Programming', 'Java', 'Javascript', 'QA']);
    const [responsibleEmailData, setResponsibleEmailData] = useState(['Jhon@gmail.om', 'Juan@gmai.com']);
    // map over the backend data to fill the selects' options
    const responsableSelectData = []
    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            closedAt: new Date(),
            responsableEmail: [] as string [],
            additionalFilesId: '',
            tags: [] as string[]
        },
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        /*
        {
    "projectId": "123",
    "projectName": "java",
    "name": "create dto",
    "createdAt": "2022-06-26",
    "closedAt": "",
    "tag": ["java", "programming"],
    "description": "tarea de java",
    "additionalFilesId": ["link1", "link2"],
    "responsibleEmail": ["diego", "fer", "kelly"]
}
        * */
        e.preventDefault()
        console.log(form.values)
    }
    return <>
        <Container size="xs" px="xs" my='xs'>
            <Text>Project id: {project?.id}</Text>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="Task name"
                    label="Name"
                    required
                    {...form.getInputProps('name')}

                />
                <Textarea
                    placeholder="Task description"
                    label="Description"
                    autosize
                    minRows={2}
                    maxRows={4}
                    required
                    {...form.getInputProps('description')}

                />
                <DatePicker
                    placeholder="Pick date"
                    label="End date"
                    {...form.getInputProps('closedAt')}

                />
                <MultiSelect
                    required
                    label="Select members"
                    data={responsibleEmailData}
                    placeholder="Select items"
                    searchable
                    creatable
                    {...form.getInputProps('responsableEmail')}
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setResponsibleEmailData((current) => [...current, query])}
                />
                <MultiSelect
                    label="Add some tags"
                    data={tagsData}
                    placeholder="Select tags"
                    searchable
                    creatable
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setTagsData((current) => [...current, query])}
                    {...form.getInputProps('tags')}
                />
                <Textarea
                    placeholder="Links..."
                    label="Extra documentation"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={2000}
                    {...form.getInputProps('additionalFilesId')}
                />
                <Button
                    color='blue'
                    radius='lg'
                    mt='xs'
                    type='submit'
                >Submit</Button>
            </form>
        </Container>
    </>
}

export default CreateTaskForm


