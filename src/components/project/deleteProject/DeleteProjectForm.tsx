import * as React from "react"
import {useState} from "react"
import {Button, TextInput} from "@mantine/core";
import {IProject} from "../../../redux/features/projects/projectTypes";
import {deleteProjectThunk} from "../../../redux/features/projects/projectThunks";
import {useAppDispatch} from "../../../redux/app/store";
import {useNavigate} from "react-router-dom";
import {showNotification} from "@mantine/notifications";

interface IProps {
    project: IProject
}

const DeleteProjectForm: React.FC<IProps> = ({project}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [projectName, setProjectName] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault()
        if (projectName === project.name) {
            console.log("dispatch delete")
            dispatch(deleteProjectThunk(id))
            navigate("/dashboard")
            showNotification({
                title: 'Project removed successfully',
                message: `The project ${project.name} was deleted!`,
            })
        }

    }
    return <>
        <form onSubmit={(e) => handleSubmit(e, project.id!)}>
            <TextInput
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder='Type project name to confirm'
            />
            {
                projectName === project.name &&
                <Button type='submit' color='red' mt='md'>Confirm</Button>
            }
        </form>
    </>
}

export default DeleteProjectForm


