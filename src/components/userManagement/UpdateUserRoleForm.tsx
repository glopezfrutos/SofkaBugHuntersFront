import * as React from "react"
import { useEffect, useMemo } from "react"
import { Button, Container, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useAppDispatch } from "../../redux/app/store";
import { getUsersThunk, putUserThunk } from "../../redux/features/users/userThunks";
import { useSelector } from "react-redux";
import { selectUserList } from "../../redux/features/users/userSlice";
import { IUser } from "../../redux/features/users/userTypes";

interface IProps {
}

const UpdateUserRoleForm: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsersThunk())
    }, [dispatch])
    const usersList = useSelector(selectUserList())
    const userEmail = useMemo(() => usersList.map(user => user.email), [usersList])

    const form = useForm({
        initialValues: {
            email: '',
            role: ''
        },
    })

    const roleData = [
        { value: 'READER', label: 'Reader' },
        { value: 'DEVELOPER', label: 'Developer' },
        { value: 'TESTER', label: 'Tester' },
        { value: 'ADMIN', label: 'Admin' }]


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { email, role } = form.values

        const userToUpdate: IUser = {
            email,
            role
        }
        dispatch(putUserThunk(userToUpdate))
        showNotification({
            title: 'User modified successfully',
            message: 'The user was updated!',
        })
        form.reset()
        return
    }

    return <>
        <Container size="xs" px="xs" my='xs'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Select
                    required
                    searchable
                    label="Pick a user"
                    placeholder="Pick one"
                    data={userEmail}
                    {...form.getInputProps('email')}
                />

                <Select
                    required
                    label="Pick a lifecycle"
                    placeholder="Pick one"
                    data={roleData}
                    {...form.getInputProps('role')}
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

export default UpdateUserRoleForm
