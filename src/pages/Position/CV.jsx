import {
  Flex,
  Title,
  ActionIcon,
  Text,
  Input,
  Button,
  Alert,
  Tooltip,
  CopyButton,
  Spoiler,
  Badge,
} from "@mantine/core";
import {
  IconTrash,
  IconEye,
  IconSearch,
  IconCheck,
  IconCopy,
  IconShare3,
  IconSparkles,
  IconChevronUp,
  IconChevronDown,
  IconFileTypePdf,
  IconFileTypeDocx,
  IconFile,
} from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import UploadZone from "../../components/Upload/UploadZone";
import appStrings from "../../utils/strings";
import { useNavigate, useLocation } from "react-router-dom";
import AppTable from "../../components/AppTable";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import {
  getCVsControl,
  uploadCVDataControl,
  watchUploadProgressControl,
} from "../../controllers/cv";
import ProgressList from "../../components/Upload/ProgressList";
import useCVState from "../../context/cv";
import { getMatchControl } from "../../controllers/match";
import { getScoreColor } from "../../utils/utils";

const columns = [
  {
    key: "cvName",
    label: appStrings.language.cv.tableCVName,
  },
  {
    key: "upload",
    label: appStrings.language.cv.tableUploadDate,
  },
  {
    key: "score",
    label: appStrings.language.cv.tableScore,
  },
  {
    key: "actions",
    label: appStrings.language.cv.tableAction,
  },
];

export default function CVPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];
  const cvs = useCVState((state) => state.cvs);
  const setCVs = useCVState((state) => state.setCVs);
  const setCVScores = useCVState((state) => state.setCVScores);
  const uploadFiles = useCVState((state) => state.uploadFiles);
  const setUploadFiles = useCVState((state) => state.setUploadFiles);
  const [isMatching, setIsMatching] = useState(false);

  function handleNavigateToCVDetail(cvId) {
    navigate(`/${projectId}/${positionId}/cv/${cvId}`);
  }

  function handleUploadFiles(files) {
    setUploadFiles(files);
    uploadCVDataControl(projectId, positionId, files).then((data) => {
      watchUploadProgressControl(data.progress_id).then(() => {
        setUploadFiles(null);
        notifications.show({
          title: appStrings.language.cv.uploadSuccessTitle,
          message: appStrings.language.cv.uploadSuccessMessage,
          color: "teal",
        });
      });
    });
  }

  function handleMatchCVJD() {
    setIsMatching(true);
    getMatchControl(projectId, positionId).then((data) => {
      setIsMatching(false);
      notifications.show({
        title: appStrings.language.cv.matchSuccessTitle,
        message: appStrings.language.cv.matchSuccessMessage,
        color: "teal",
      });
      // Set score to CVs
      const formatedData = Object.entries(data).map(([key, value]) => ({
        id: key,
        score: value.overall,
      }));
      setCVScores(formatedData);
    });
  }

  useEffect(() => {
    getCVsControl(projectId, positionId).then((data) => {
      // Sort data by score
      data.sort((a, b) => b.score.overall - a.score.overall);
      setCVs(
        data.map((cv) => ({
          id: cv.id,
          cvName: cv.name,
          upload: cv.upload_at,
          score: cv.score.overall,
        }))
      );
    });
  }, [setCVs]);

  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={1}>{appStrings.language.cv.title}</Title>
      </HeadingLayout>
      <Spoiler
        initialState={true}
        maxHeight={0}
        showLabel={
          <Flex align="center" gap="xs">
            <Text>{appStrings.language.cv.showUploadZone}</Text>
            <IconChevronDown size="1rem" />
          </Flex>
        }
        hideLabel={
          <Flex align="center" gap="xs">
            <Text c="dimmed">{appStrings.language.cv.hideUploadZone}</Text>
            <IconChevronUp size="1rem" color="gray" />
          </Flex>
        }
      >
        <Flex direction="column" gap="md">
          {uploadFiles ? (
            <ProgressList
              items={uploadFiles.map((file) => ({
                name: file.name,
                progress: file.progress || 0,
              }))}
            />
          ) : (
            <UploadZone onFileSelected={(files) => handleUploadFiles(files)} />
          )}
          <Alert
            variant="light"
            color="grape"
            radius="xs"
            title={appStrings.language.cv.shareUrlTitle}
            icon={<IconShare3 />}
          >
            <Flex align="center" gap="md">
              {appStrings.language.cv.shareUrlMessage}
              <CopyButton value={`https://upload/${positionId}`} timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip
                    label={
                      copied
                        ? appStrings.language.btn.copied
                        : appStrings.language.btn.copy
                    }
                    withArrow
                    position="right"
                  >
                    <ActionIcon
                      color={copied ? "teal" : "gray"}
                      variant="subtle"
                      onClick={copy}
                    >
                      {copied ? (
                        <IconCheck size="1rem" />
                      ) : (
                        <IconCopy size="1rem" />
                      )}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            </Flex>
          </Alert>
        </Flex>
      </Spoiler>
      <Flex justify="space-between">
        <Flex gap="md">
          <Input
            placeholder={appStrings.language.cv.searchPlaceholder}
            leftSection={<IconSearch size="1rem" />}
          />
        </Flex>
        <Button
          leftSection={<IconSparkles size="1rem" />}
          onClick={handleMatchCVJD}
          loading={isMatching}
        >
          {appStrings.language.cv.matchBtn}
        </Button>
      </Flex>
      <AppTable
        columns={columns}
        loading={!cvs}
        data={cvs?.map((data) => ({
          cvName: (
            <Flex align="center" gap="md">
              {data.cvName.toLowerCase().includes(".pdf") ? (
                <IconFileTypePdf size="1rem" color="#E03131" />
              ) : data.cvName.toLowerCase().includes(".docx") ? (
                <IconFileTypeDocx size="1rem" color="#3B5BDB" />
              ) : (
                <IconFile size="1rem" />
              )}
              <Text>{data.cvName}</Text>
            </Flex>
          ),
          upload: data.upload,
          score: data.score ? (
            <Badge variant="light" color={getScoreColor(data.score)}>
              {data.score}%
            </Badge>
          ) : (
            <Text c="dimmed">{appStrings.language.cv.notScored}</Text>
          ),
          actions: (
            <Flex gap="xs">
              <ActionIcon
                variant="subtle"
                onClick={() => handleNavigateToCVDetail(data.id)}
              >
                <IconEye size="1rem" />
              </ActionIcon>
              <ActionIcon variant="subtle" color="red">
                <IconTrash size="1rem" />
              </ActionIcon>
            </Flex>
          ),
        }))}
        pageSize={5}
      />
    </Flex>
  );
}
