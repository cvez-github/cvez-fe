import { Flex, Title, Input, Select, Table, Pagination, Badge, ActionIcon } from "@mantine/core";
import { IconSearch, IconTrash, IconEye } from "@tabler/icons-react";
import { useState, useEffect } from 'react';
import HeadingLayout from "../../components/Layout/HeadingLayout";
import Uploadqu from "../../components/Upload/Uploadquestion";
import appStrings from "../../utils/strings";
import { useNavigate, useLocation } from 'react-router-dom';

const mockData = [
  { bankname: "React", totalquestion: "10", level: "easy" },
  { bankname: "Angular", totalquestion: "20", level: "medium" },
  { bankname: "Vue", totalquestion: "30", level: "hard" },
  { bankname: "Svelte", totalquestion: "40", level: "easy" },
  { bankname: "React", totalquestion: "10", level: "easy" },
  { bankname: "Angular", totalquestion: "20", level: "medium" },
  { bankname: "Vue", totalquestion: "30", level: "hard" },
  { bankname: "Svelte", totalquestion: "40", level: "easy" },
];
const itemsPerPage = 5;
const totalItems = mockData.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

export default function QuestionBankPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];

  function handleNavigateToQuestionDetail(questionId) {
    navigate(`/${projectId}/${positionId}/questions/${questionId}`)
  }



  const getColor = (level) => {
    if (level === "easy") {
      return "green";
    } else if (level === "medium") {
      return "orange";
    } else {
      return "red";
    }
  };


  useEffect(() => {
    const newRows = mockData
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map((mockData, index) => (
        <Table.Tr key={index}>
          <Table.Td>{mockData.bankname}</Table.Td>
          <Table.Td>{mockData.totalquestion}</Table.Td>
          <Table.Td>
            <Badge radius="sm" variant="light" color={getColor(mockData.level)} style={{ minWidth: '70px' }}>
              {mockData.level}
            </Badge>
          </Table.Td>
          <Table.Td>
            <Flex gap='xs'>
              <ActionIcon variant="subtle" color="gray" aria-label="Settings" size='xs' onClick={
                () => handleNavigateToQuestionDetail(mockData.bankname)
              }>
                <IconEye stroke={1.5} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="red" aria-label="Settings" size='xs'>
                <IconTrash stroke={1.5} />
              </ActionIcon>
            </Flex>
          </Table.Td>
        </Table.Tr>
      ));
    setRows(newRows);
  }, [currentPage]);

  return (
    <Flex direction="column" gap="md" w='60%'>
      <HeadingLayout>
        <Title order={1}>{appStrings.language.tableBank.title}</Title>
      </HeadingLayout>
      <Uploadqu />
      <Flex gap='md'>
        <Input
          placeholder={appStrings.language.search.placeholder}
          rightSection={<IconSearch size="1rem" />}
        />
        <Select w="15%"
          placeholder={appStrings.language.choice.title}
          data={['React', 'Angular', 'Vue', 'Svelte']}
        />
      </Flex>
      <div style={{ height: '220px', overflow: 'auto' }}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>{appStrings.language.tableBank.bankname}</Table.Th>
              <Table.Th>{appStrings.language.tableBank.totalquestion}</Table.Th>
              <Table.Th>{appStrings.language.tableBank.level}</Table.Th>
              <Table.Th>{appStrings.language.tableBank.actions}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
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
