import * as React from "react"
import {useMemo, useState} from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";
import {useAppDispatch} from "../../../redux/app/store";
import {useSelector} from "react-redux";
import {selectUserList} from "../../../redux/features/users/userSlice";
import {useForm} from "@mantine/form";
import dayjs from "dayjs";
import {formatDate} from "../../../utils/dateUtils";
import {putTaskThunk} from "../../../redux/features/tasks/taskThunks";
import {showNotification} from "@mantine/notifications";
import {Button, Container, MultiSelect, Select, Text, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";

interface IProps {
    task: ITask
}

const UpdateTaskForm : React.FC<IProps> = ({task}) => {
    const dispatch = useAppDispatch()
    const usersList = useSelector(selectUserList())
    //multiple select data
    const [tagsData, setTagsData] = useState(['Programming', 'Java', 'Javascript', 'QA']);
    const [, setResponsibleEmailData] = useState([] as string[]);
    const [additionalFilesData, setAdditionalFilesData] = useState(task.additionalFilesId)
    // map over the backend data to fill the selects' options
    const responsableSelectData = useMemo(() => usersList.map(user => user.email), [usersList])

    const form = useForm({
        initialValues: {
            name: task.name,
            description: task.description,
            closedAt: new Date(),
            responsibleEmail: task.responsibleEmail,
            additionalFilesId: task.additionalFilesId,
            tag: task.tag,
            status: task.status
        },
    })


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {name, description, responsibleEmail, closedAt, additionalFilesId, tag, status} = form.values
        const areValid = [name, description, status].every(Boolean)
        const responsibleLength = responsibleEmail.length
        const isBefore = dayjs().isBefore(dayjs(closedAt))
        if (areValid && responsibleLength) {
            const checkDate = isBefore ? formatDate(closedAt) : task.closedAt
            const taskToUpdate: ITask = {
                id: task.id,
                name,
                description,
                tag,
                closedAt: checkDate,
                createdAt: task.createdAt,
                projectId: task.projectId,
                projectName: task.projectName,
                additionalFilesId,
                responsibleEmail,
                status,
            }
            dispatch(putTaskThunk(taskToUpdate))
            showNotification({
                title: 'Task updated successfully',
                message: 'The task was updated!',
            })
            return
        }
        showNotification({
            title: 'There is an error on the form!',
            color: 'red',
            message: 'Check if the fields are correct...',
        })
    }
    return <>
        <Container size="xs" px="xs" my='xs'>
            <Text>Project id: {task.projectId}</Text>
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
                <Select
                    required
                    label="Task status"
                    placeholder="Pick one"
                    data={[
                        {value: 'OPENED', label: 'Opened'},
                        {value: 'CLOSED', label: 'Closed'},
                        {value: 'BLOCKED', label: 'Blocked'},
                    ]}
                    {...form.getInputProps('status')}
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

export default UpdateTaskForm


