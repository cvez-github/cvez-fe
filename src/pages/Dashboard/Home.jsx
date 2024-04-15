import { useEffect } from "react";
import { Flex, Title, Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import GridLayout from "../../components/Layout/GridLayout";
import ProjectCard from "../../components/ProjectCard";
import appStrings from "../../utils/strings";
import YourProjectAction from "../../components/Actions/YourProjectAction";
import CreateProjectDrawer from "../Drawer/CreateProjectDrawer";
import {
  getSharedProjectsControl,
  getYourProjectsControl,
} from "../../controllers/dashboard";
import useGlobalState from "../../context/global";
import useProjectsState from "../../context/project";
import Empty from "../../components/Empty";
import { deleteProjectControl } from "../../controllers/projects";

export default function HomePage() {
  const [isNewProjectOpen, newProjectToggle] = useDisclosure(false);
  const user = useGlobalState((state) => state.user);
  const projects = useProjectsState((state) => state.projects);
  const setProjects = useProjectsState((state) => state.setProjects);
  const shared = useProjectsState((state) => state.shared);
  const setShared = useProjectsState((state) => state.setShared);

  function handleDeleteProject(id) {
    // Delete project
    deleteProjectControl(id).then(() => {
      getYourProjectsControl().then((data) => setProjects(data));
      notifications.show({
        title: appStrings.language.yourProject.deleteSuccess,
        autoClose: 5000,
      });
    });
  }

  useEffect(() => {
    // Get your projects
    if (!projects) {
      getYourProjectsControl().then((data) => setProjects(data));
    }
    // Get shared projects
    if (!shared) {
      getSharedProjectsControl().then((data) => setShared(data));
    }
  }, [setProjects, setShared]);

  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout loading={!user}>
        <Title order={1}>
          {appStrings.language.home.welcome}
          {user?.name}
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
      {projects?.length !== 0 ? (
        <GridLayout
          title={appStrings.language.home.recentProjects}
          loading={!projects}
        >
          {projects?.map((data, index) => (
            <ProjectCard
              key={index}
              id={data.id}
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
      ) : !shared?.length ? (
        <Empty />
      ) : null}
      {shared?.length !== 0 ? (
        <GridLayout
          title={appStrings.language.home.sharedProjects}
          loading={!shared}
        >
          {shared?.map((data, index) => (
            <ProjectCard
              key={index}
              id={data.id}
              title={data.name}
              description={data.description}
              alias={data.alias}
              members={data.members}
            />
          ))}
        </GridLayout>
      ) : null}
      <CreateProjectDrawer
        open={isNewProjectOpen}
        onClose={newProjectToggle.close}
      />
    </Flex>
  );
}
