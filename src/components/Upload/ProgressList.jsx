import { Paper, List, ThemeIcon, Loader, rem } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";

export default function ProgressList({ items }) {
  return (
    <Paper shadow="lg" p="md" withBorder>
      <List spacing="md" center>
        {items.map((item, index) => (
          <List.Item
            key={index}
            icon={
              item.progress < 100 ? (
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
            {item.name}
          </List.Item>
        ))}
      </List>
    </Paper>
  );
}
