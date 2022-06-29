import * as React from "react"
import {Button, Container, Select, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {useForm} from "@mantine/form";
import {ITask} from "../../../redux/features/tasks/taskTypes";

interface IProps {
    task: ITask
}

const BugForm: React.FC<IProps> = ({task}) => {
    //select the users
    // map to form a selectData

    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            author: '',
            taskId: '',
            responsableEmail: '',
            discoverAt: '',
            contextInfo: '',
            links: '',
            severity: '',
            priority: '',
            clientImportance: '',
            status: '',
            endDate: new Date(),
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
                <TextInput
                    placeholder="Bug title"
                    label="Title"
                    required
                    maxLength={50}
                    {...form.getInputProps('title')}

                />
                <Textarea
                    placeholder="Bug description"
                    label="Description"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={500}
                    required
                    {...form.getInputProps('description')}

                />
                <Select
                    required
                    searchable
                    label="Pick a responsable"
                    placeholder="Pick one"
                    data={[
                        {value: 'react', label: 'React'},
                        {value: 'ng', label: 'Angular'},
                        {value: 'svelte', label: 'Svelte'},
                        {value: 'vue', label: 'Vue'},
                    ]}
                    {...form.getInputProps('responsableEmail')}
                />
                <Textarea
                    placeholder="Context..."
                    label="Context information"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={1000}
                    {...form.getInputProps('contextInfo')}
                    required
                />
                {/*(Planificación; Análisis; Diseño; Implementación; Pruebas; Despliegue; Uso o mantenimiento). */}
                <Select
                    required
                    label="Pick a lifecycle"
                    placeholder="Pick one"
                    data={[
                        {value: 'Planning', label: 'Planning'},
                        {value: 'Analysis', label: 'Analysis'},
                        {value: 'Implementation', label: 'Implementation'},
                        {value: 'Testing', label: 'Testing'},
                        {value: 'Deployment', label: 'Deployment'},
                        {value: 'Maintenance', label: 'Maintenance'},
                    ]}
                    {...form.getInputProps('discoverAt')}
                />
                <Textarea
                    placeholder="Links..."
                    label="Extra documentation"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={2000}
                    {...form.getInputProps('links')}
                />
                <Select
                    required
                    label="Severity level"
                    placeholder="Pick one"
                    data={[
                        {value: 'High', label: 'High'},
                        {value: 'Medium', label: 'Medium'},
                        {value: 'Low', label: 'Low'},
                    ]}
                    {...form.getInputProps('severity')}
                />
                <Select
                    required
                    label="Priority level"
                    placeholder="Pick one"
                    data={[
                        {value: 'High', label: 'High'},
                        {value: 'Medium', label: 'Medium'},
                        {value: 'Low', label: 'Low'},
                    ]}
                    {...form.getInputProps('priority')}
                />
                <Select
                    required
                    label="Client importance level"
                    placeholder="Pick one"
                    data={[
                        {value: 'High', label: 'High'},
                        {value: 'Medium', label: 'Medium'},
                        {value: 'Low', label: 'Low'},
                    ]}
                    {...form.getInputProps('clientImportance')}
                />
                {/*Huge text areas*/}
                <Textarea
                    placeholder="Conclusion..."
                    label="Conclusion"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={5000}
                    {...form.getInputProps('conclusion')}
                />
                <Textarea
                    placeholder="Some problems that the bug may cause..."
                    label="Global problems"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={5000}
                    {...form.getInputProps('globalProblems')}
                />
                <Textarea
                    placeholder="Some references..."
                    label="References"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={5000}
                    {...form.getInputProps('references')}
                />
                <DatePicker
                    placeholder="Pick date"
                    label="End date"
                    {...form.getInputProps('endDate')}

                />
                {/*Debe estar habilitado para las modificaciones donde interactúe el desarrollador según el ciclo de vida de los defectos sugerido en este documento.*/}
                <Textarea
                    placeholder="Some observations..."
                    label="Developer observations"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={5000}
                    {...form.getInputProps('developerObservations')}
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


