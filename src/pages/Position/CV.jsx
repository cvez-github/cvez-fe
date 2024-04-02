import { Flex, Title, Table, ActionIcon, Badge, Pagination, Select, Input } from "@mantine/core";
import { IconTrash, IconEye, IconSearch } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import HeadingLayout from "../../components/Layout/HeadingLayout";
import Uploadcv from "../../components/Upload/Uploadcv";
import Addalert from "../../components/Alert/Addalert";
import appStrings from "../../utils/strings";
const SelectData = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
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
            <Badge radius="sm" variant="light" color={getColor(mockData.score)} style={{ minWidth: '50px' }}>
              {mockData.score}
            </Badge>
          </Table.Td>
          <Table.Td>
            <Flex gap='xs'>
              <ActionIcon variant="subtle" color="gray" aria-label="Settings" size='xs'>
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
        <Title order={1}>{appStrings.language.cvData.title}</Title>
      </HeadingLayout>
      <Uploadcv />
      <Addalert title="https://www.example.com/cv" />
      <Flex gap='md'>
        <Input
          placeholder={appStrings.language.search.placeholder}
          rightSection={<IconSearch size="1rem" />}
        />
        <Select w="15%"
          placeholder="choices"
          data={SelectData}


        />
      </Flex>
      <div style={{ height: '220px', overflow: 'auto' }}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>{appStrings.language.tableCv.cvName}</Table.Th>
              <Table.Th>{appStrings.language.tableCv.uploadDate}</Table.Th>
              <Table.Th>{appStrings.language.tableCv.score}</Table.Th>
              <Table.Th>{appStrings.language.tableCv.actions}</Table.Th>
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