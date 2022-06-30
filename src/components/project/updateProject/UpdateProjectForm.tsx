import * as React from "react"
import {useEffect, useMemo} from "react"
import {IProject} from "../../../redux/features/projects/projectTypes";
import {Button, Container, MultiSelect, Select, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {useAppDispatch} from "../../../redux/app/store";
import {getUsersThunk} from "../../../redux/features/users/userThunks";
import {useSelector} from "react-redux";
import {selectUserList} from "../../../redux/features/users/userSlice";
import {useForm} from "@mantine/form";
import dayjs from "dayjs";
import {formatDate} from "../../../utils/dateUtils";
import {putProjectsThunk} from "../../../redux/features/projects/projectThunks";
import {showNotification} from "@mantine/notifications";

interface IProps {
    project: IProject
}

const UpdateProjectForm: React.FC<IProps> = ({project}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsersThunk())
    }, [dispatch])
    const usersList = useSelector(selectUserList())
    const form = useForm({
        initialValues: {
            name: project.name,
            description: project.description,
            closedAt: new Date(),
            teamEmails: project.teamEmails,
            owners: project.owners,
            status: project.status
        },
    })
    //load this state with the information from the backend
    const [, setMembersData] = React.useState([] as string[]);
    const [, setOwnersData] = React.useState([] as string[]);
    const membersSelectData = useMemo(() => usersList.map(user => user.email), [usersList])
    const ownersSelectData = useMemo(() => usersList.map(user => user.email), [usersList])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {name, description, owners, teamEmails, closedAt, status} = form.values
        const valid = [name, description, status].every(Boolean)
        const membersLength = teamEmails.length && owners.length
        const isBefore = dayjs().isBefore(dayjs(closedAt))

        if (valid && membersLength) {
            const checkDate = isBefore ? formatDate(closedAt) : ''
            const projectToUpdate: IProject = {
                id: project.id,
                name,
                description,
                teamEmails,
                owners,
                createdAt: project.createdAt,
                closedAt: checkDate,
                status
            }
            dispatch(putProjectsThunk(projectToUpdate))
            showNotification({
                title: 'Project updated successfully',
                message: 'The project was updated!',
            })
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
                    label="Close date"
                    {...form.getInputProps('closedAt')}

                />
                <MultiSelect
                    required
                    label="Select members"
                    data={membersSelectData}
                    placeholder="Select items"
                    searchable
                    creatable
                    {...form.getInputProps('teamEmails')}
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setMembersData((current) => [...current, query])}
                />
                <MultiSelect
                    required
                    label="Select owners"
                    data={ownersSelectData}
                    placeholder="Select items"
                    searchable
                    creatable
                    {...form.getInputProps('owners')}
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setOwnersData((current) => [...current, query])}
                />
                <Select
                    required
                    label="Project status"
                    placeholder="Pick one"
                    data={[
                        {value: 'CREATED', label: 'Created'},
                        {value: 'ACTIVE', label: 'Active'},
                        {value: 'CANCELED', label: 'Cancelled'},
                        {value: 'PAUSED', label: 'Paused'},
                        {value: 'FINISHED', label: 'Finished'},
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

export default UpdateProjectForm


