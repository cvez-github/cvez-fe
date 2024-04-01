import { Flex, Title, Button } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import ProjectGridLayout from "../../components/Layout/GridLayout";
import ProjectCard from "../../components/ProjectCard";
import appStrings from "../../utils/strings";
import DeleteProjectAction from "../../components/Actions/DeletedProjectAction";

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

export default function TrashPage() {
  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout>
        <Title order={2}>{appStrings.language.trash.heading}</Title>
        <Flex>
          <Button color="red" leftSection={<IconTrash size="1rem" />}>
            {appStrings.language.trash.deletePermanently}
          </Button>
        </Flex>
      </HeadingLayout>
      <ProjectGridLayout>
        {mockData.map((data, index) => (
          <ProjectCard
            key={index}
            title={data.title}
            description={data.description}
            alias={data.alias}
            actions={<DeleteProjectAction />}
            disableNavigate
          />
        ))}
      </ProjectGridLayout>
    </Flex>
  );
}
