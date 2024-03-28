import { Text, Paper, ActionIcon, Group, Title, Popover } from '@mantine/core';
import { IconDots, IconEdit, IconTrash } from '@tabler/icons-react';

export default function Technical({ Ex }) {
    return (
        <Paper w='50%' shadow="xs" withBorder p="xl">
            <Group justify="space-between">
                <Title order={4}>Technical Skill</Title>
                <Popover width={90} position="top" withArrow shadow="md">
                    <Popover.Target>
                        <ActionIcon variant="light" color="gray" size="md" radius="md" aria-label="Settings">
                            <IconDots />
                        </ActionIcon>
                    </Popover.Target>
                    <Popover.Dropdown bg="var(--mantine-color-body)">
                        <Group justify='space-between'>
                            <ActionIcon variant="subtle" color="gray" aria-label="Settings" size='xs'>
                                <IconEdit/>
                            </ActionIcon>

                            <ActionIcon variant="subtle" color="red" aria-label="Settings" size='xs'>
                                <IconTrash/>
                            </ActionIcon>
                        </Group>
                    </Popover.Dropdown>
                </Popover>
            </Group>
            <Text>
                {Ex}
            </Text>
        </Paper>
    );
}