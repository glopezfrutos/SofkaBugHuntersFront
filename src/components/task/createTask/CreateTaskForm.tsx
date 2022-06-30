import * as React from "react"
import {useMemo, useState} from "react"
import {Button, Container, MultiSelect, Text, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {useForm} from "@mantine/form";
import {IProject} from "../../../redux/features/projects/projectTypes";
import {useAppDispatch} from "../../../redux/app/store";
import {useSelector} from "react-redux";
import {selectUserList} from "../../../redux/features/users/userSlice";
import dayjs from "dayjs";
import {formatDate} from "../../../utils/dateUtils";
import {ITask} from "../../../redux/features/tasks/taskTypes";
import {postTaskThunk} from "../../../redux/features/tasks/taskThunks";
import {showNotification} from "@mantine/notifications";

interface IProps {
    project: IProject
}

const CreateTaskForm: React.FC<IProps> = ({project}) => {
    const dispatch = useAppDispatch()
    const usersList = useSelector(selectUserList())
    //multiple select data
    const [tagsData, setTagsData] = useState(['Programming', 'Java', 'Javascript', 'QA']);
    const [, setResponsibleEmailData] = useState([] as string[]);
    const [additionalFilesData, setAdditionalFilesData] = useState([] as string[])
    // map over the backend data to fill the selects' options
    const responsableSelectData = useMemo(() => usersList.map(user => user.email), [usersList])

    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            closedAt: new Date(),
            responsibleEmail: [] as string[],
            additionalFilesId: [] as string[],
            tag: [] as string[]
        },
    })


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {name, description, responsibleEmail, closedAt, additionalFilesId, tag} = form.values
        const areValid = [name, description].every(Boolean)
        const responsibleLength = responsibleEmail.length
        const isBefore = dayjs().isBefore(dayjs(closedAt))
        if (areValid && responsibleLength) {
            const checkDate = isBefore ? formatDate(closedAt) : ''
            const newTask: ITask = {
                name,
                description,
                tag,
                closedAt: checkDate,
                createdAt: formatDate(new Date()),
                projectId: project.id!,
                projectName: project.name,
                additionalFilesId,
                responsibleEmail,
            }
            dispatch(postTaskThunk(newTask))
            showNotification({
                title: 'Task added successfully',
                message: 'The task was saved!',
            })
            form.reset()
            return
        }
        showNotification({
            title: 'There is an error on the form!',
            color: 'red',
            message: 'Check if the date is correct...',
        })
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
                    data={responsableSelectData}
                    placeholder="Select items"
                    searchable
                    creatable
                    {...form.getInputProps('responsibleEmail')}
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
                    {...form.getInputProps('tag')}
                />
                <MultiSelect
                    placeholder="Links..."
                    label="Extra documentation"

                    data={additionalFilesData}
                    searchable
                    creatable
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setAdditionalFilesData((current) => [...current, query])}
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


