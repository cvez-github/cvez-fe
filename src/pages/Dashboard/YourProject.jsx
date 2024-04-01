import { Title, Flex, Button, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import GridLayout from "../../components/Layout/GridLayout";
import ProjectCard from "../../components/ProjectCard";
import appStrings from "../../utils/strings";
import YourProjectAction from "../../components/Actions/YourProjectAction";
import CreateProjectDrawer from "../Drawer/CreateProjectDrawer";

const mockData = [
  {
    title: "Project 1",
    description: "Description 1",
    alias: "P1",
    members: [
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
    ],
  },
  {
    title: "Project 1",
    description: "Description 1",
    alias: "P1",
    members: [
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
    ],
  },
  {
    title: "Project 1",
    description: "Description 1",
    alias: "P1",
    members: [
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
    ],
  },
];

export default function YourProjectPage() {
  const [isNewProjectOpen, isNewProjectToggle] = useDisclosure(false);
  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout>
        <Title order={2}>{appStrings.language.yourProject.heading}</Title>
        <Flex gap={15}>
          <Input
            placeholder={appStrings.language.yourProject.searchPlaceholder}
            rightSection={<IconSearch size="1rem" />}
          />
          <Button
            leftSection={<IconPlus size="1rem" />}
            onClick={isNewProjectToggle.open}
          >
            {appStrings.language.yourProject.createBtn}
          </Button>
        </Flex>
      </HeadingLayout>
      <GridLayout>
        {mockData.map((data, index) => (
          <ProjectCard
            key={index}
            title={data.title}
            description={data.description}
            alias={data.alias}
            members={data.members}
            actions={<YourProjectAction />}
          />
        ))}
      </GridLayout>
      <CreateProjectDrawer
        open={isNewProjectOpen}
        onClose={isNewProjectToggle.close}
      />
    </Flex>
  );
}
