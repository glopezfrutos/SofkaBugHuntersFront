import * as React from "react"
import {useState} from "react"
import {ITask} from "../../../redux/features/tasks/taskTypes";
import {useAppDispatch} from "../../../redux/app/store";
import {useNavigate} from "react-router-dom";
import {showNotification} from "@mantine/notifications";
import {Button, TextInput} from "@mantine/core";
import {deleteTaskById} from "../../../redux/features/tasks/taskThunks";
import {useSelector} from "react-redux";
import {selectLoggedUser} from "../../../redux/features/users/userSlice";

interface IProps {
    task: ITask
}

const DeleteTaskForm: React.FC<IProps> = ({task}) => {
    const loggedUser = useSelector(selectLoggedUser())

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [taskName, setTaskName] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault()
        if (taskName === task.name) {
            console.log("dispatch delete")
            dispatch(deleteTaskById({taskId: id, user: loggedUser}))
            navigate("/dashboard")
            showNotification({
                title: 'Task removed successfully',
                message: `The task ${task.name} was deleted!`,
            })
        }

    }
    return <>
        <form onSubmit={(e) => handleSubmit(e, task.id!)}>
            <TextInput
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Type task's name to confirm"
            />
            {
                taskName === task.name &&
                <Button type='submit' color='red' mt='md'>Confirm</Button>
            }
        </form>
    </>
}

export default DeleteTaskForm


