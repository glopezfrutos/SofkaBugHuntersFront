import * as React from "react"
import {Center, Grid, Loader} from "@mantine/core";
import {fetchStatus} from "../../../redux/features/projects/projectTypes";
import {useSelector} from "react-redux";
import {selectProjectFetchStatus, selectProjectList} from "../../../redux/features/projects/projectSlice";
import ProjectCard from "./ProjectCard";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/app/store";
import {getProjectsThunk} from "../../../redux/features/projects/projectThunks";

interface IProps {
}

const ProjectList: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const projectList = useSelector(selectProjectList())
    const status = useSelector(selectProjectFetchStatus())

    useEffect(() => {
        dispatch(getProjectsThunk())
    }, [])

    const loader =
        <Center>
            <Loader color="pink" variant="bars"/>
        </Center>

    const content = projectList.map(p => <ProjectCard key={p.id} project={p}/>)

    const grid = <Grid mt='xs'>
        {content}
    </Grid>
    return <>
        {status === fetchStatus.PENDING && loader}
        {status === fetchStatus.FULFILLED && grid}
        {status === fetchStatus.REJECTED && <div>Error while fetching</div>}
    </>
}

export default ProjectList


