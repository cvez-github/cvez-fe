import { Flex, Title, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
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
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
      {
        name: "Member 1",
        avatar: "https://i.pravatar.cc/150",
      },
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

export default function HomePage() {
  const [isNewProjectOpen, newProjectToggle] = useDisclosure(false);
  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout>
        <Title order={1}>
          {appStrings.language.home.welcome}Quang Minh Doan
        </Title>
        <Flex>
          <Button
            leftSection={<IconPlus size="1rem" />}
            onClick={newProjectToggle.open}
          >
            {appStrings.language.home.createBtn}
          </Button>
        </Flex>
      </HeadingLayout>
      <GridLayout title={appStrings.language.home.recentProjects}>
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
      <GridLayout title={appStrings.language.home.sharedProjects}>
        {mockData.map((data, index) => (
          <ProjectCard
            key={index}
            title={data.title}
            description={data.description}
            alias={data.alias}
            members={data.members}
          />
        ))}
      </GridLayout>
      <CreateProjectDrawer
        open={isNewProjectOpen}
        onClose={newProjectToggle.close}
      />
    </Flex>
  );
}
