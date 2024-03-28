import { Paper , Flex, Text, ActionIcon } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

export default function QuesAnsP({Question,Answer}) {
  return (
    <Paper shadow="lg" withBorder p="xl"> 
    <Flex direction="column" gap="md">
    <Flex justify="space-between" gap="md">
    <Text>{Question} </Text>
    <ActionIcon variant="light" color="gray" size="md" radius="md" aria-label="Settings">
      <IconDots  />
      </ActionIcon>
    </Flex>
    <Flex gap="md">
    <Text c="blue">Answer : </Text> 
    <Text >{Answer} </Text> 
    </Flex>
    </Flex>
    </Paper>
  );
}