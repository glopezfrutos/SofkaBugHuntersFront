import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import AppRoutes from "./routes/AppRoutes";
import {NotificationsProvider} from "@mantine/notifications";
import {useEffect} from "react";
import {useAppDispatch} from "./redux/app/store";
import {addUserToState} from "./redux/features/users/userSlice";

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });
    const dispatch = useAppDispatch()
    const getUserDataLocalStorage = () => {
        const email = localStorage.getItem("email")
        const role = localStorage.getItem("role")
        const sessionId = localStorage.getItem("sessionId")
        if (email && role && sessionId) {
            dispatch(addUserToState({email, role, sessionId}))
        }
    }

    useEffect(() => {
        getUserDataLocalStorage()
    }, [])

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
                <NotificationsProvider position="top-right">
                    <AppRoutes/>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App