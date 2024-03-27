import { Card, Flex,Text } from '@mantine/core';

export default function CardComponents({Question,Answer}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Flex direction="column" gap="md">
    <Text>{Question} </Text>
    <Flex gap="md">
    <Text c="blue">Answer : </Text> 
    <Text >{Answer} </Text> 
    </Flex>
    </Flex>
    </Card>
  );
}