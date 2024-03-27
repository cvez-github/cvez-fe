import { Card, Text,  Button, Group,ActionIcon   } from '@mantine/core';
import { IconDots   } from '@tabler/icons-react';
import AvatarGroup from '../GroupAvatar/GroupAvatar';

export default function CardComponent({ProjectName,ProjectDescription,ProjectId}) {
  

  return (
    <Card shadow="sm" padding="xs" me="5px" withBorder style={{ maxWidth: 500 }}>
      <Card.Section>
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{ProjectName}</Text>
        <ActionIcon variant="light" color="gray" size="md" radius="md" aria-label="Settings">
      <IconDots  />
      </ActionIcon>
      </Group>
      <Text size="sm">
        {ProjectDescription}
      </Text>
      <Group justify="space-between" mt="md" mb="xs">
        <Text size="xs" c="dimmed">
          {ProjectId} </Text>
        <AvatarGroup />
      </Group>
    </Card>
  );
}