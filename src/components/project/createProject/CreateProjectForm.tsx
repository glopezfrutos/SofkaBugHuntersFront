import * as React from "react"
import {useEffect, useMemo} from "react"
import {Button, Container, MultiSelect, Textarea, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import dayjs from "dayjs";
import {useForm} from "@mantine/form";
import {showNotification} from "@mantine/notifications";
import {useAppDispatch} from "../../../redux/app/store";
import {postProjectsThunk} from "../../../redux/features/projects/projectThunks";
import {formatDate} from "../../../utils/dateUtils";
import {IProject} from "../../../redux/features/projects/projectTypes";
import {getUsersThunk} from "../../../redux/features/users/userThunks";
import {useSelector} from "react-redux";
import {selectUserList} from "../../../redux/features/users/userSlice";

interface IProps {
}

const CreateProjectForm: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const usersList = useSelector(selectUserList())
    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            closedAt: new Date(),
            teamEmails: [] as string[],
            owners: [] as string[],
        },
    })
    //load this state with the information from the backend
    const [, setMembersData] = React.useState([] as string[]);
    const [, setOwnersData] = React.useState([] as string[]);
    const membersSelectData = useMemo(() => usersList.map(user => user.email), [usersList])
    const ownersSelectData = useMemo(() => usersList.map(user => user.email), [usersList])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {name, description, owners, teamEmails, closedAt} = form.values
        const valid = [name, description].every(Boolean)
        const membersLength = teamEmails.length && owners.length
        const isBefore = dayjs().isBefore(dayjs(closedAt))

        if (valid && membersLength) {
            const checkDate = isBefore ? formatDate(closedAt) : ''
            const newProject: IProject = {
                name,
                description,
                teamEmails,
                owners,
                createdAt: formatDate(new Date()),
                closedAt: checkDate
            }
            dispatch(postProjectsThunk(newProject))
            showNotification({
                title: 'Project added successfully',
                message: 'The project was saved!',
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


