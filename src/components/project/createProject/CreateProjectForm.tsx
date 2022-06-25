import * as React from "react"
import {Button, Container, MultiSelect, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {useForm} from "@mantine/form";
import {showNotification} from "@mantine/notifications";

interface IProps {
}

const CreateProjectForm: React.FC<IProps> = () => {
    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            date: new Date(),
            members: [] as string[],
            owners: [] as string[],
        },
    })
    //load this state with the information from the backend
    const [members, setMembers] = React.useState(['React', 'Angular', 'Svelte', 'Vue']);
    const [owners, setOwners] = React.useState(['Juan', 'Pablo', 'Luis']);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form.values)
        showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome!',
        })
    }
    return <>
        <Container size="xs" px="xs" my='xs'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="Project name"
                    label="Name"
                    required
                    {...form.getInputProps('name')}

                />
                <Textarea
                    placeholder="Project description"
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
                    {...form.getInputProps('date')}

                />
                <MultiSelect
                    required
                    label="Select members"
                    data={members}
                    placeholder="Select items"
                    searchable
                    creatable
                    {...form.getInputProps('members')}
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setMembers((current) => [...current, query])}
                />
                <MultiSelect
                    required
                    label="Select owners"
                    data={owners}
                    placeholder="Select items"
                    searchable
                    creatable
                    {...form.getInputProps('owners')}
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setOwners((current) => [...current, query])}
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

export default CreateProjectForm


