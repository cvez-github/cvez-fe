import { Flex, Title, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import GridLayout from "../../components/Layout/GridLayout";
import ProjectCard from "../../components/ProjectCard";
import appStrings from "../../utils/strings";

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

export default function SharedProjectPage() {
  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout>
        <Title order={2}>{appStrings.language.sharedProjects.heading}</Title>
        <Flex>
          <Input
            placeholder={appStrings.language.sharedProjects.searchPlaceholder}
            rightSection={<IconSearch size="1rem" />}
          />
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
          />
        ))}
      </GridLayout>
    </Flex>
  );
}
