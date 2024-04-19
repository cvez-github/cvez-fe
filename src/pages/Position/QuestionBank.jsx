import {
  Flex,
  Title,
  Input,
  Select,
  Table,
  Pagination,
  Badge,
  ActionIcon,
} from "@mantine/core";
import { IconSearch, IconTrash, IconEye } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
// import Uploadqu from "../../components/Upload/Uploadquestion";
import appStrings from "../../utils/strings";
import { useNavigate, useLocation } from "react-router-dom";
import AppTable from "../../components/AppTable";

const columns = [
  {
    key: "cvName",
    label: appStrings.language.questionBanks.tableName,
  },
  {
    key: "upload",
    label: appStrings.language.questionBanks.tableCount,
  },
  {
    key: "score",
    label: appStrings.language.questionBanks.tableLevel,
  },
  {
    key: "actions",
    label: appStrings.language.questionBanks.tableAction,
  },
];

export default function QuestionBankPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];

  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={1}>{appStrings.language.questionBanks.heading}</Title>
      </HeadingLayout>
      <Flex gap="md">
        <Input
          placeholder={appStrings.language.questionBanks.searchPlaceholder}
          leftSection={<IconSearch size="1rem" />}
        />
      </Flex>
      <AppTable columns={columns} data={[]} pageSize={5} />
    </Flex>
  );
}
