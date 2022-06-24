import * as React from "react"
import {AppShell, useMantineTheme} from "@mantine/core";
import {Outlet} from "react-router-dom";
import ShellHeader from "../../components/mantine/shell/ShellHeader";
import ShellNavbar from "../../components/mantine/shell/ShellNavbar";

interface IProps {}

const DashboardShell : React.FC<IProps> = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const  main = {background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],}
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


