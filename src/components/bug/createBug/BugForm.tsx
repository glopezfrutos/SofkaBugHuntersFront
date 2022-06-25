import * as React from "react"
import {Button, Container, Select, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {useForm} from "@mantine/form";

interface IProps {}

const BugForm : React.FC<IProps> = () => {
    const form = useForm({
        initialValues: {
            taskId: '',
            title: '',
            description: '',
            endDate: new Date(),
            responsableEmail: '',
            discoverAt: '',
            contextInfo: '',
            severity: '',
            priority: '',
            clientImportance: '',
            status: '',
            conclusion: '',
            globalProblems: '',
            references: '',
            developerObservations: '',
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
                    label="Pick a task"
                    placeholder="Task to add bug to..."
                    data={[
                        { value: 'react', label: 'React' },
                        { value: 'ng', label: 'Angular' },
                        { value: 'svelte', label: 'Svelte' },
                        { value: 'vue', label: 'Vue' },
                    ]}
                    {...form.getInputProps('taskId')}

                />
                <TextInput
                    placeholder="Bug title"
                    label="Title"
                    required
                    {...form.getInputProps('title')}

                />
                <Textarea
                    placeholder="Bug description"
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

export default BugForm


