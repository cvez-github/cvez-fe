import { Card, Text, Avatar, Button, Group } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

export default function CardComponent() {
  const AvatarGroup = () => {
    return (
      <Avatar.Group>
        <Avatar src="image.png" />
        <Avatar src="image.png" />
        <Avatar src="image.png" />
        <Avatar>+5</Avatar>
      </Avatar.Group>
    );
  };

  return (
    <Card shadow="sm" padding="xs" me="5px" withBorder style={{ maxWidth: 500 }}>
      <Card.Section>
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Sample Project</Text>
        <Button variant="light" color="gray" justify='center'><IconDots size="1.5rem"/></Button>
      </Group>
      <Text size="sm">
        This is the description of the first project
      </Text>
      <Group justify="space-between" mt="md" mb="xs">
        <Text size="xs" c="dimmed">
          sample-project-d3gs2 </Text>
        <AvatarGroup />
      </Group>
    </Card>
  );
}