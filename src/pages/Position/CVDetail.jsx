import {
  Flex,
  Breadcrumbs,
  Anchor,
  ScrollArea,
  Paper,
  Title,
  ActionIcon,
  RingProgress,
  Text,
  Badge,
  Menu,
  Skeleton,
  Center,
  Tooltip,
  Loader,
} from "@mantine/core";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import {
  IconDownload,
  IconDots,
  IconTrash,
  IconInfoSquareRounded,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCVDetailControl } from "../../controllers/cv";
import { getScoreColor } from "../../utils/utils";

export default function CVDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];
  const cvId = location.pathname.split("/")[4];
  const [cv, setCV] = useState(null);

  function handleNavigateToCVs() {
    navigate(`/${projectId}/${positionId}/cv`);
  }

  useEffect(() => {
    // Get CV detail
    getCVDetailControl(projectId, positionId, cvId).then((data) => {
      setCV(data);
    });
  }, []);

  return (
    <Flex direction="column" gap="xl">
      <HeadingLayout>
        <Breadcrumbs>
          <Anchor onClick={handleNavigateToCVs}>
            {appStrings.language.cv.title}
          </Anchor>
          {cv ? cv.name : <Skeleton width={200} height={25} />}
        </Breadcrumbs>
      </HeadingLayout>
      {cv ? (
        <Paper
          withBorder
          h={500}
          style={{
            overflow: "hidden",
          }}
        >
          <iframe
            src={cv.url}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Paper>
      ) : (
        <Skeleton height={500} />
      )}
      <Flex justify="space-between">
        {cv ? (
          <Title order={2}>{cv.name}</Title>
        ) : (
          <Skeleton width={200} height={36} />
        )}
        <Menu withinPortal shadow="md" position="top-end" width={150}>
          <Menu.Target>
            <ActionIcon variant="light" color="gray">
              <IconDots />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown p={5}>
            <Menu.Item
              c="gray"
              leftSection={<IconDownload size="1rem" />}
              onClick={() => handleEdit(question, index)}
            >
              {appStrings.language.btn.download}
            </Menu.Item>
            <Menu.Item c="red" leftSection={<IconTrash size="1rem" />}>
              {appStrings.language.btn.delete}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
      <Flex gap="lg">
        {cv
          ? Object.entries(cv.score).map(([key, value]) => (
              <Flex direction="column" align="center">
                <RingProgress
                  label={
                    <Text>
                      <Center>{value}%</Center>
                    </Text>
                  }
                  roundCaps
                  sections={[{ value: value, color: getScoreColor(value) }]}
                />
                <Text>
                  {key === "overall"
                    ? appStrings.language.cvDetail.overall
                    : key}
                </Text>
              </Flex>
            ))
          : null}
      </Flex>
      <Flex direction="column" align="start" gap="xl">
        {cv
          ? Object.entries(cv.extraction).map(([key, value]) => (
              <Flex direction="column" align="start" gap="md">
                <Flex align="center" gap="md">
                  <Title order={3}>{key}</Title>
                  <Tooltip>
                    <IconInfoSquareRounded size="1rem" />
                  </Tooltip>
                </Flex>
                <Flex wrap="wrap" gap="md">
                  {Object.entries(value).map(([key, value]) => (
                    <Badge
                      color="blue"
                      radius="xl"
                      size="lg"
                      rightSection={
                        <Badge color="gray" size="md">
                          {value}
                        </Badge>
                      }
                    >
                      {key}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            ))
          : null}
      </Flex>
    </Flex>
  );
}
