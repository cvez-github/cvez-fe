import {
    Card,
    Title,
    Text,
    Group,
    ActionIcon,
    Menu,
    Badge,
    Flex
} from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useHover } from "@mantine/hooks";
import { IconDots } from "@tabler/icons-react";

export default function PositionCard({
    title,
    description,
    alias,
    start_date,
    end_date,
    actions}) {

    const { hovered, ref } = useHover();
    const navigate = useNavigate();
    const location = useLocation();
    const projectId = location.pathname.split("/")[1];


    function handleNavigateToProject(alias) {
        navigate(`/${projectId}/${alias}`)
    }

    return (
        <Card withBorder ref={ref} shadow={hovered ? "xl" : "md"}>
            <Group justify="space-between">
                <Title
                    order={5}
                    onClick={() => handleNavigateToProject(alias)}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    {title}
                </Title>
                {actions ? (
                    <Menu withinPortal shadow="md" position="top-end" width={150}>
                        <Menu.Target>
                            <ActionIcon variant="light" color="gray">
                                <IconDots />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown p={5}>{actions}</Menu.Dropdown>
                    </Menu>
                ) : null}
            </Group>
            <Text size="sm">{description}</Text>
            <Group justify="space-between" align="flex-end">
                <Text size="xs" c="dimmed">
                    {alias}
                </Text>
                <Text size="xs" c="dimmed">
                    <Flex gap="xs">
                        <Badge variant="light" color="teal">{start_date}</Badge>
                        <Badge variant="light" color="red">{end_date}</Badge>
                    </Flex>
                </Text>
            </Group>
        </Card>
    );
}
