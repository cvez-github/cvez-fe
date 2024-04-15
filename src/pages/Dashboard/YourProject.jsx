import { Title, Flex, Button, Input } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import GridLayout from "../../components/Layout/GridLayout";
import ProjectCard from "../../components/ProjectCard";
import CreateProjectDrawer from "../Drawer/CreateProjectDrawer";
import YourProjectAction from "../../components/Actions/YourProjectAction";
import Empty from "../../components/Empty";
import appStrings from "../../utils/strings";

import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import useProjectsState from "../../context/project";
import { getYourProjectsControl } from "../../controllers/dashboard";
import { deleteProjectControl } from "../../controllers/projects";

export default function YourProjectPage() {
  const [isNewProjectOpen, isNewProjectToggle] = useDisclosure(false);
  const projects = useProjectsState((state) => state.projects);
  const setProjects = useProjectsState((state) => state.setProjects);

  function handleDeleteProject(id) {
    // Delete project
    deleteProjectControl(id).then(() => {
      getYourProjectsControl().then((data) => setProjects(data));
      notifications.show({
        title: appStrings.language.notification.success.deleteProject,
        autoClose: 5000,
      });
    });
  }

  useEffect(() => {
    if (!projects) {
      getYourProjectsControl().then((data) => setProjects(data));
    }
  }, [setProjects]);

  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout loading={!projects}>
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
      {projects?.length !== 0 ? (
        <GridLayout loading={!projects}>
          {projects?.map((data) => (
            <ProjectCard
              key={data.id}
              title={data.name}
              description={data.description}
              alias={data.alias}
              members={data.members}
              actions={
                <YourProjectAction
                  onDeleteTap={() => handleDeleteProject(data.id)}
                />
              }
            />
          ))}
        </GridLayout>
      ) : (
        <Empty />
      )}
      <CreateProjectDrawer
        open={isNewProjectOpen}
        onClose={isNewProjectToggle.close}
      />
    </Flex>
  );
}
