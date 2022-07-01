import React from 'react';
import {ClipboardText, Home, Users} from 'tabler-icons-react';
import {Group, Text, ThemeIcon, UnstyledButton} from '@mantine/core';
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "@mantine/hooks";

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    path: string
}

function MainLink({ icon, color, label, path }: MainLinkProps) {
    const navigate = useNavigate()
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
            onClick={() => navigate(path)}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const [admin, tester, reader, developer] = ['ADMIN', 'TESTER', 'READER', 'DEVELOPER']

const data = [
    { icon: <Home size={16} />, color: 'blue', label: 'Home', path: '/dashboard', roles: [admin, tester, reader, developer] },
    { icon: <Users size={16} />, color: 'gray', label: 'Users', path: 'user-management',roles: [admin] },
    { icon: <ClipboardText size={16} />, color: 'teal', label: 'New Project', path: 'add-project', roles: [admin, tester] },
];

export function MainLinks() {
    const role = localStorage.getItem("role") || "READER"
    const links = data.filter(value => value.roles.includes(role)).map((link) => <MainLink {...link} key={link.label} />);
    return <div>{links}</div>;
}