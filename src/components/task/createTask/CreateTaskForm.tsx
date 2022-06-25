import * as React from "react"
import {Button, Container, MultiSelect, Select, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {useForm} from "@mantine/form";
import {useState} from "react";

interface IProps {}

const CreateTaskForm : React.FC<IProps> = () => {
    //multiple select data
    const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);
    // map over the backend data to fill the selects' options
    const projectSelectData = []
    const responsableSelectData = []
    const form = useForm({
        initialValues: {
            projectId: '',
            name: '',
            description: '',
            endDate: new Date(),
            responsableEmail: '',
            tags: [] as string[]
        },
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form.values)
    }
    return <>
        <Container size="xs" px="xs" my='xs'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Select
                    required
                    label="Pick a project"
                    placeholder="Project to add task to..."
                    data={[
                        { value: 'react', label: 'React' },
                        { value: 'ng', label: 'Angular' },
                        { value: 'svelte', label: 'Svelte' },
                        { value: 'vue', label: 'Vue' },
                    ]}
                    {...form.getInputProps('projectId')}

                />
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
                    {...form.getInputProps('endDate')}

                />
                <Select
                    required
                    label="Pick a responsable"
                    placeholder="Pick one"
                    data={[
                        { value: 'react', label: 'React' },
                        { value: 'ng', label: 'Angular' },
                        { value: 'svelte', label: 'Svelte' },
                        { value: 'vue', label: 'Vue' },
                    ]}
                    {...form.getInputProps('responsableEmail')}
                />
                <MultiSelect
                    label="Add some tags"
                    data={data}
                    placeholder="Select tags"
                    searchable
                    creatable
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setData((current) => [...current, query])}
                    {...form.getInputProps('tags')}
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


