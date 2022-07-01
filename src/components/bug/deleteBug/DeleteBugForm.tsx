import * as React from "react"
import {useState} from "react"
import {Button, TextInput} from "@mantine/core";
import {useAppDispatch} from "../../../redux/app/store";
import {useNavigate} from "react-router-dom";
import {showNotification} from "@mantine/notifications";
import {IBug} from "../../../redux/features/bugs/bugTypes";
import {deleteBugById} from "../../../redux/features/bugs/bugThunks";

interface IProps {
    bug:IBug
}

const DeleteBugForm : React.FC<IProps> = ({bug}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [bugName, setBugName] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault()
        if (bugName === bug.title) {
            dispatch(deleteBugById(id))
            navigate("/dashboard")
            showNotification({
                title: 'Bug removed successfully',
                message: `The bug ${bug.title} was deleted!`,
            })
        }

    }
    return <>
        <form onSubmit={(e) => handleSubmit(e, bug.id!)}>
            <TextInput
                value={bugName}
                onChange={(e) => setBugName(e.target.value)}
                placeholder="Type bug's name to confirm"
            />
            {
                bugName === bug.title &&
                <Button type='submit' color='red' mt='md'>Confirm</Button>
            }
        </form>
    </>
}

export default DeleteBugForm


