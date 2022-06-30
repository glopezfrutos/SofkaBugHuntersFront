import * as React from "react"
import {useMemo} from "react"
import {useAppDispatch} from "../../../redux/app/store";
import {useSelector} from "react-redux";
import {selectUserList} from "../../../redux/features/users/userSlice";
import {useForm} from "@mantine/form";
import dayjs from "dayjs";
import {formatDate} from "../../../utils/dateUtils";
import {IBug} from "../../../redux/features/bugs/bugTypes";
import {putBugThunk} from "../../../redux/features/bugs/bugThunks";
import {showNotification} from "@mantine/notifications";
import {Button, Container, Select, Textarea, TextInput} from "@mantine/core";
import {bugSelectData, levelSelectData, lifeCycleSelectData} from "../sharedBugData";
import {DatePicker} from "@mantine/dates";

interface IProps {
    bug: IBug
}

const UpdateBugForm : React.FC<IProps> = ({bug}) => {
    const DUMMY_EMAIL = "dummyEmail@gmail.com"
    const dispatch = useAppDispatch()
    const usersList = useSelector(selectUserList())
    const responsableSelectData = useMemo(() => usersList.map(user => user.email), [usersList])

    const form = useForm({
        initialValues: {
            title: bug.title,
            description: bug.description,
            responsableEmail: DUMMY_EMAIL,
            discoverAt: bug.lifecycle,
            contextInfo: bug.contextInfo,
            links: bug.additionalFile,
            severity: bug.severity,
            priority: bug.priority,
            clientImportance: bug.clientImportance,
            endDate: new Date(),
            conclusion: bug.conclusion,
            globalProblems: bug.globalIssues,
            references: bug.references,
            developerObservations: bug.developerObservations,
            status: bug.status
        },
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {
            title,
            description,
            responsableEmail,
            contextInfo,
            discoverAt,
            severity,
            priority,
            clientImportance,
            endDate,
            developerObservations,
            globalProblems,
            conclusion,
            links,
            references,
            status

        } = form.values
        const areValid = [title, description,responsableEmail,contextInfo, severity, priority, clientImportance, discoverAt, status].every(Boolean)
        const isBefore = dayjs().isBefore(dayjs(endDate))
        if (areValid) {
            const checkDate = isBefore ? formatDate(endDate) : ''
            const bugToUpdate: IBug = {
                id: bug.id,
                projectId: bug.projectId,
                taskId: bug.taskId,
                closedAt: checkDate,
                createdAt: bug.createdAt,
                clientImportance: clientImportance,
                title,
                developerObservations,
                priority,
                severity,
                lifecycle: discoverAt,
                description,
                additionalFile: links,
                contextInfo,
                globalIssues: globalProblems,
                references,
                conclusion,
                responsible: DUMMY_EMAIL,
                solutionResponsible: responsableEmail,
                status,
            }
            console.log(bugToUpdate)
            dispatch(putBugThunk(bugToUpdate))
            showNotification({
                title: 'Bug updated successfully',
                message: 'The bug was saved!',
            })
            return
        }
        showNotification({
            title: 'There is an error on the form!',
            color: 'red',
            message: 'Check if the data is correct...',
        })
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
                    label="Pick a responsible"
                    placeholder="Pick one"
                    data={responsableSelectData}
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
                <Select
                    required
                    label="Pick a lifecycle"
                    placeholder="Pick one"
                    data={lifeCycleSelectData}
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
                    data={levelSelectData}
                    {...form.getInputProps('severity')}
                />
                <Select
                    required
                    label="Priority level"
                    placeholder="Pick one"
                    data={levelSelectData}
                    {...form.getInputProps('priority')}
                />
                <Select
                    required
                    label="Client importance level"
                    placeholder="Pick one"
                    data={levelSelectData}
                    {...form.getInputProps('clientImportance')}
                />
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
                <Textarea
                    placeholder="Some observations..."
                    label="Developer observations"
                    autosize
                    minRows={2}
                    maxRows={4}
                    maxLength={5000}
                    {...form.getInputProps('developerObservations')}
                />
                <Select
                    required
                    label="Pick a lifecycle"
                    placeholder="Pick one"
                    data={bugSelectData}
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

export default UpdateBugForm


