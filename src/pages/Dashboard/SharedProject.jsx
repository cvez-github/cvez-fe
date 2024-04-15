import { useEffect } from "react";
import { Flex, Title, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import GridLayout from "../../components/Layout/GridLayout";
import ProjectCard from "../../components/ProjectCard";
import appStrings from "../../utils/strings";
import { getSharedProjectsControl } from "../../controllers/dashboard";
import useProjectsState from "../../context/project";
import Empty from "../../components/Empty";

export default function SharedProjectPage() {
  const shared = useProjectsState((state) => state.shared);
  const setShared = useProjectsState((state) => state.setShared);

  useEffect(() => {
    if (!shared) {
      getSharedProjectsControl().then((data) => setShared(data));
    }
  }, [setShared]);

  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout loading={!shared}>
        <Title order={2}>{appStrings.language.sharedProjects.heading}</Title>
        <Flex>
          <Input
            placeholder={appStrings.language.sharedProjects.searchPlaceholder}
            rightSection={<IconSearch size="1rem" />}
          />
        </Flex>
      </HeadingLayout>
      {shared?.length !== 0 ? (
        <GridLayout loading={!shared}>
          {shared?.map((data, index) => (
            <ProjectCard
              key={index}
              title={data.name}
              description={data.description}
              alias={data.alias}
              members={data.members}
            />
          ))}
        </GridLayout>
      ) : (
        <Empty />
      )}
    </Flex>
  );
}
