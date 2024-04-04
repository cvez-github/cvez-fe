import { useEffect } from "react";
import { Flex, Title, Button } from "@mantine/core";
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


export default function HomePage() {
  const [isNewProjectOpen, newProjectToggle] = useDisclosure(false);
  const user = useGlobalState((state) => state.user);
  const projects = useProjectsState((state) => state.projects);
  const setProjects = useProjectsState((state) => state.setProjects);
  const shared = useProjectsState((state) => state.shared);
  const setShared = useProjectsState((state) => state.setShared);

  useEffect(() => {
    // Get your projects
    getYourProjectsControl().then((data) => setProjects(data));
    // Get shared projects
    getSharedProjectsControl().then((data) => setShared(data));
  }, [setProjects, setShared]);

  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout>
        <Title order={1}>{appStrings.language.home.welcome}{user?.name}</Title>
        <Flex>
          <Button
            leftSection={<IconPlus size="1rem" />}
            onClick={newProjectToggle.open}
          >
            {appStrings.language.home.createBtn}
          </Button>
        </Flex>
      </HeadingLayout>
      {projects ? (
        <GridLayout title={appStrings.language.home.recentProjects}>
          {projects.map((data, index) => (
            <ProjectCard
              key={index}
              id={data.id}
              title={data.name}
              description={data.description}
              alias={data.alias}
              members={data.members}
              actions={<YourProjectAction />}
            />
          ))}
        </GridLayout>
      ) : null}
      {shared ? (
        <GridLayout title={appStrings.language.home.sharedProjects}>
          {shared.map((data, index) => (
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
