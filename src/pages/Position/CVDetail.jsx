import {
  Flex,
  Breadcrumbs,
  Anchor,
  ScrollArea,
  Paper,
  Title,
  ActionIcon,
  SimpleGrid,
  Text,
  Badge,
  Menu
} from "@mantine/core";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import { IconDownload,IconDots,IconTrash  } from "@tabler/icons-react";

const mockExperience = [
  { company: "Company 1", project1: "Description of this project", project2: "Description of this project" },
  { company: "Company 2", project1: "Description of this project", project2: "Description of this project" },
]
const mockData = [
  {technical: "React", soft: "Teamwork", certificate: "Certificate 1" },
  { technical: "Vue.js", soft: "Problem solving", certificate: "Certificate 2" },
  { technical: "Angular", soft: "Communication", certificate: "Certificate 3" },
  { technical: "Node.js", soft: "Time management", certificate: "Certificate 4" },
  { technical: "Express.js", soft: "Leadership", certificate: "Certificate 5" },
  { technical: "MongoDB", soft: "Adaptability", certificate: "Certificate 6" },
  { technical: "SQL", soft: "Creativity", certificate: "Certificate 7" },

]
export default function CVDetailPage() {
  return (
    <Flex direction="column" gap="xl" w="60%">
      <Breadcrumbs>
        <Anchor href="/cv">{appStrings.language.breadcrumb.cv}</Anchor>
        <Anchor href="/cv/cvdetail">
          {appStrings.language.breadcrumb.cvdetail}
        </Anchor>
      </Breadcrumbs>
      <Paper  p="sm" withBorder>
        <ScrollArea h={300} offsetScrollbars>
          
        </ScrollArea>
      </Paper>
      <Flex justify="space-between">
        <Title order={1}>{appStrings.language.cvDetail.title}</Title>
        <Menu withinPortal shadow="md" position="top-end" width={150}>
        <Menu.Target>
          <ActionIcon variant="light" color="gray">
            <IconDots />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown p={5}>
          <Menu.Item c="gray" leftSection={<IconDownload size="1rem" />} onClick={() => handleEdit(question, index)}>
            {appStrings.language.btn.download}
          </Menu.Item>
          <Menu.Item c="red" leftSection={<IconTrash size="1rem" />}>
            {appStrings.language.btn.delete}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      </Flex>
      <Title order={2}>{appStrings.language.cvDetail.summary}</Title>
      Description of this CV
      <Title order={2}>{appStrings.language.cvDetail.skillcert}</Title>
      {mockExperience.map((experience, index) => (
        <div key={index}>
          <Text size='xl' c="blue">{experience.company}</Text>
          <Text size='md' c="gray">Project 1: {experience.project1}</Text>
          <Text size='md' c="gray">Project 2: {experience.project2}</Text>
        </div>
      ))}
      <SimpleGrid cols={1} spacing="xl" verticalSpacing="lg">
      <Title order={3}>{appStrings.language.cvDetail.technical}</Title>
      <SimpleGrid cols={4}  spacing ='xs' verticalSpacing='md'>
      {mockData.map((data, index) => (
            <Badge variant="light" key={index} size='lg' c="blue">{data.technical}</Badge>
          ))}
      </SimpleGrid>
      <Title order={3}>{appStrings.language.cvDetail.soft}</Title>
      <SimpleGrid cols={4}  spacing ='xs' verticalSpacing='md'>
      {mockData.map((data, index) => (
            <Badge variant="light" key={index} size='lg' c="blue">{data.soft}</Badge >
          ))}
      </SimpleGrid>  
      <Title order={3}>{appStrings.language.cvDetail.certificate}</Title> 
      <SimpleGrid cols={4}  spacing ='xs' verticalSpacing='md'>
      {mockData.map((data, index) => (
            <Badge variant="light" key={index} size='lg' c="blue">{data.certificate}</Badge>
          ))}
      </SimpleGrid>  
      </SimpleGrid>
    </Flex>
  );
}