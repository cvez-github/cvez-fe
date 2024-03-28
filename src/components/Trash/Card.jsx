import { Card, Text, Group,ActionIcon, Popover   } from '@mantine/core';
import { IconDots, IconTrash, IconRestore    } from '@tabler/icons-react';

export default function CardComponent({ProjectName,ProjectDescription,ProjectId}) {
  

  return (
    <Card shadow="sm" padding="xs" me="5px" withBorder style={{ maxWidth: 500 }}>
      <Card.Section>
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{ProjectName}</Text>
        <Popover width={90} position="top" withArrow shadow="md">
          <Popover.Target>
            <ActionIcon variant="light" color="gray" size="md" radius="md" aria-label="Settings">
              <IconDots />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown bg="var(--mantine-color-body)">
            <Group justify='space-between'>
              <ActionIcon variant="subtle" color="blue" aria-label="Settings" size='xs'>
                <IconRestore/>
              </ActionIcon>

              <ActionIcon variant="subtle" color="red" aria-label="Settings" size='xs'>
                <IconTrash/>
              </ActionIcon>
            </Group>
          </Popover.Dropdown>
        </Popover>
      </Group>
      <Text size="sm">
        {ProjectDescription}
      </Text>
      <Group justify="space-between" mt="md" mb="xs">
        <Text size="xs" c="dimmed">
          {ProjectId} </Text>
      </Group>
    </Card>
  );
}