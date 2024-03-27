import { Table, ActionIcon, Badge } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

const elements = [
    { CvName: "Nguyen Van A", date: "01/04/2024", score: "85%", actions: <ActionIcon variant="subtle" color="gray"><IconLock /></ActionIcon> },
    { CvName: "Tran Thi B", date: "02/04/2024", score: "25%", actions: <ActionIcon variant="subtle" color="gray"><IconLock /></ActionIcon> },
    { CvName: "Le Van C", date: "03/04/2024", score: "85%", actions: <ActionIcon variant="subtle" color="gray"><IconLock /></ActionIcon> },
    { CvName: "Hoang Thi D", date: "04/04/2024", score: "75%", actions: <ActionIcon variant="subtle" color="gray"><IconLock /></ActionIcon> },
    { CvName: "Tran Van E", date: "05/04/2024", score: "1%", actions: <ActionIcon variant="subtle" color="gray"><IconLock /></ActionIcon> },
];

export default function Tables() {
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

    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.CvName}</Table.Td>
            <Table.Td>{element.date}</Table.Td>
            <Table.Td>
                <Badge radius="sm" variant="light" color={getColor(element.score)}>
                    {element.score}
                </Badge>
            </Table.Td>
            <Table.Td>{element.actions}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Cv Name</Table.Th>
                    <Table.Th>Upload date</Table.Th>
                    <Table.Th>Score</Table.Th>
                    <Table.Th>Actions</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}