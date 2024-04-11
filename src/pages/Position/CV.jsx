import {
  Flex,
  Title,
  Table,
  ActionIcon,
  Badge,
  Pagination,
  Select,
  Input,
  Button,
  Alert,
  Tooltip,
  CopyButton,
} from "@mantine/core";
import {
  IconTrash,
  IconEye,
  IconSearch,
  IconCheck,
  IconCopy,
  IconShare3,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import UploadZone from "../../components/Upload/UploadZone";
import appStrings from "../../utils/strings";
import { useNavigate, useLocation } from "react-router-dom";

const SelectData = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];
const mockData = [
  { CvName: "Nguyen Van A", date: "01/04/2024", score: "85%" },
  { CvName: "Tran Thi B", date: "02/04/2024", score: "25%" },
  { CvName: "Le Van C", date: "03/04/2024", score: "85%" },
  { CvName: "Hoang Thi D", date: "04/04/2024", score: "75%" },
  { CvName: "Tran Van E", date: "05/04/2024", score: "1%" },
  { CvName: "Tran Van E", date: "05/04/2024", score: "1%" },
  { CvName: "Tran Van E", date: "05/04/2024", score: "1%" },
  { CvName: "Tran Van E", date: "05/04/2024", score: "1%" },
];
const itemsPerPage = 5;
const totalItems = mockData.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

export default function CVPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];

  function handleNavigateToCVDetail(cvId) {
    navigate(`/${projectId}/${positionId}/cv/${cvId}`);
  }

  const getColor = (score) => {
    const numericScore = parseFloat(score.replace("%", ""));
    if (numericScore < 50) {
      return "red";
    } else if (numericScore >= 80) {
      return "green";
    } else {
      return "orange";
    }
  };

  useEffect(() => {
    const newRows = mockData
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map((mockData, index) => (
        <Table.Tr key={index}>
          <Table.Td>{mockData.CvName}</Table.Td>
          <Table.Td>{mockData.date}</Table.Td>
          <Table.Td>
            <Badge
              radius="sm"
              variant="light"
              color={getColor(mockData.score)}
              style={{ minWidth: "3rem" }}
            >
              {mockData.score}
            </Badge>
          </Table.Td>
          <Table.Td>
            <Flex gap="xs">
              <ActionIcon
                variant="subtle"
                color="gray"
                aria-label="Settings"
                size="xs"
                onClick={() => handleNavigateToCVDetail(mockData.CvName)}
              >
                <IconEye stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                color="red"
                aria-label="Settings"
                size="xs"
              >
                <IconTrash stroke={1.5} />
              </ActionIcon>
            </Flex>
          </Table.Td>
        </Table.Tr>
      ));
    setRows(newRows);
  }, [currentPage]);

  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={1}>{appStrings.language.cv.title}</Title>
      </HeadingLayout>
      <UploadZone />
      <Alert
        variant="light"
        color="grape"
        radius="xs"
        title={appStrings.language.cv.shareUrlTitle}
        icon={<IconShare3 />}
      >
        <Flex align="center" gap="md">
          {appStrings.language.cv.shareUrlMessage}
          {/* <CopyButton value={""} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? "Copied" : "Copy"}
                withArrow
                position="right"
              >
                <ActionIcon
                  color={copied ? "teal" : "gray"}
                  variant="subtle"
                  onClick={copy}
                >
                  {copied ? (
                    <IconCheck style={{ width: rem(16) }} />
                  ) : (
                    <IconCopy style={{ width: rem(16) }} />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton> */}
        </Flex>
      </Alert>
      <Flex justify="space-between">
        <Flex gap="md">
          <Input
            placeholder={appStrings.language.cv.searchPlaceholder}
            rightSection={<IconSearch size="1rem" />}
          />
          <Select w="10rem" placeholder="choices" data={SelectData} />
        </Flex>
        <Button>{appStrings.language.cv.matchBtn}</Button>
      </Flex>
      <Table verticalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{appStrings.language.cv.tableCVName}</Table.Th>
            <Table.Th>{appStrings.language.cv.tableUploadDate}</Table.Th>
            <Table.Th>{appStrings.language.cv.tableScore}</Table.Th>
            <Table.Th>{appStrings.language.cv.tableAction}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Flex justify="center">
        <Pagination
          total={totalPages}
          color="rgba(74, 70, 70, 1)"
          active={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </Flex>
    </Flex>
  );
}
