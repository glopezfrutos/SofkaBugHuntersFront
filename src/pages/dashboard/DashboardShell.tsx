import * as React from "react"
import {AppShell, useMantineTheme} from "@mantine/core";
import {Outlet} from "react-router-dom";
import ShellHeader from "../../components/mantine/shell/ShellHeader";
import ShellNavbar from "../../components/mantine/shell/ShellNavbar";
import {useAppDispatch} from "../../redux/app/store";
import {useEffect} from "react";
import {getUsersThunk} from "../../redux/features/users/userThunks";

interface IProps {
}

const DashboardShell: React.FC<IProps> = () => {
    //dispatch get user from parent component
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsersThunk())
    }, [dispatch])
    //-------------
    const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const main = {background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],}
    return (
        <AppShell
            styles={{main}}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={<ShellNavbar opened={opened}/>}
            header={<ShellHeader opened={opened} setOpened={setOpened}/>}
        >
            <Outlet/>
        </AppShell>
    )
}

export default DashboardShell


