import { Card, Text,  Button, Group } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import { Badge } from '@mantine/core';


export default function CardComponent(position,description,positionid,startDate,endDate) {
  
  return (
    <Card shadow="sm" padding="xs" me="5px" withBorder style={{ maxWidth: 500 }}>
      <Card.Section>
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{position}</Text>
        <Button variant="light" color="gray" justify='center'><IconDots size="1.5rem"/></Button>
      </Group>
      <Text size="sm">
        {description}
      </Text>
      <Group justify="space-between" mt="md" mb="xs">
        <Text size="xs" c="dimmed">
          {positionid} </Text>
          <Group>
          <Badge variant="light" color="green">{startDate}</Badge>
          <Badge variant="light" color="red"><b>{endDate}</b></Badge>
          </Group>
          
      </Group>
    </Card>
  );
}