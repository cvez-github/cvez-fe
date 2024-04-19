import { Paper, List, ThemeIcon, Loader, rem, Flex, Text } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export default function ProgressList({ items }) {
  return (
    <Paper shadow="lg" p="md" withBorder>
      <List spacing="md" center>
        {Object.entries(items).map(([name, progress], index) => (
          <List.Item
            key={index}
            icon={
              progress < 100 ? (
                <ThemeIcon color="gray" size={24} radius="xl">
                  <Loader size={rem(16)} />
                </ThemeIcon>
              ) : (
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              )
            }
          >
            <Flex justify="space-between" gap="lg" align="center">
              {name}
              <Text c={progress < 100 ? "gray" : "teal"}>{progress}%</Text>
            </Flex>
          </List.Item>
        ))}
      </List>
    </Paper>
  );
}
