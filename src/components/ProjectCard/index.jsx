import {
  Card,
  Title,
  Text,
  Group,
  ActionIcon,
  Avatar,
  Tooltip,
  Popover,
} from "@mantine/core";
import { IconDots } from "@tabler/icons-react";

export default function ProjectCard({
  title,
  description,
  alias,
  members,
  actions,
}) {
  return (
    <Card withBorder>
      <Group justify="space-between">
        <Title order={5}>{title}</Title>
        {actions ? (
          <Popover shadow="md" position="top-end" width={150}>
            <Popover.Target>
              <ActionIcon variant="light" color="gray">
                <IconDots />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown p={5}>{actions}</Popover.Dropdown>
          </Popover>
        ) : null}
      </Group>
      <Text size="sm">{description}</Text>
      <Group justify="space-between" align="flex-end">
        <Text size="xs" c="dimmed">
          {alias}
        </Text>
        {members ? (
          <Tooltip.Group openDelay={300} closeDelay={100}>
            <Avatar.Group>
              {members.slice(0, 4).map((member, index) => (
                <Tooltip key={index} label={member.name} withArrow>
                  <Avatar src={member.avatar} size="sm" />
                </Tooltip>
              ))}
              {members.length > 4 ? (
                <Tooltip
                  label={members.slice(4).map((member, index) => (
                    <Text key={index}>{member.name}</Text>
                  ))}
                  withArrow
                >
                  <Avatar size="sm" c="gray" radius="lg">
                    +{members.length - 4}
                  </Avatar>
                </Tooltip>
              ) : null}
            </Avatar.Group>
          </Tooltip.Group>
        ) : null}
      </Group>
    </Card>
  );
}
