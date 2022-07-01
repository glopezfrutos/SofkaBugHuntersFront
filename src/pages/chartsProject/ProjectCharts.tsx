import * as React from "react"
import {useEffect} from "react"
import {useInterval} from "@mantine/hooks";
import {useAppDispatch} from "../../redux/app/store";
import {getProjectsThunk} from "../../redux/features/projects/projectThunks";

interface IProps {}

const ProjectCharts : React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const refreshProjects = () => {
        console.log("refreshed")
        // dispatch(getProjectsThunk())
    }
    const TWO_MINUTES = 120000
    const interval = useInterval(() => refreshProjects(), TWO_MINUTES);



    useEffect(() => {
        interval.start();
        return interval.stop;
    }, []);
    return <>
        refreshing every {TWO_MINUTES} milis
    </>
}

export default ProjectCharts


