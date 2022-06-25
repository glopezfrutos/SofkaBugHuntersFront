import React from 'react';
import {Book2, Bug, ClipboardText, Home, Subtask} from 'tabler-icons-react';
import {Group, Text, ThemeIcon, UnstyledButton} from '@mantine/core';
import {useNavigate} from "react-router-dom";

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

const data = [
    { icon: <Home size={16} />, color: 'blue', label: 'Home', path: '/dashboard' },
    { icon: <ClipboardText size={16} />, color: 'teal', label: 'New Project', path: 'add-project' },
    { icon: <Book2 size={16} />, color: 'blue', label: 'Projects', path: 'all-projects' },
    { icon: <Subtask size={16} />, color: 'blue', label: 'New Task', path: 'add-task' },
    { icon: <Bug size={16} />, color: 'blue', label: 'New Bug', path: 'add-bug' },
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label} />);
    return <div>{links}</div>;
}