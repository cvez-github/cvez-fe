import { Flex, Title, Button } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import ProjectGridLayout from "../../components/Layout/GridLayout";
import ProjectCard from "../../components/ProjectCard";
import appStrings from "../../utils/strings";
import DeleteProjectAction from "../../components/Actions/DeletedProjectAction";
import { useEffect } from "react";
import { getTrashProjectsControl } from "../../controllers/dashboard";
import useProjectsState from "../../context/project";
import Empty from "../../components/Empty";
import { restoreProjectControl } from "../../controllers/projects";

export default function TrashPage() {
  const trash = useProjectsState((state) => state.trash);
  const setTrash = useProjectsState((state) => state.setTrash);

  function handleRestoreProject(id) {
    restoreProjectControl(id).then((_) => {
      getTrashProjectsControl().then((data) => setTrash(data));
      notifications.show({
        title: appStrings.language.notification.success.restoreProject,
        autoClose: 5000,
      });
    });
  }

  useEffect(() => {
    if (!trash) {
      getTrashProjectsControl().then((data) => setTrash(data));
    }
  }, [setTrash]);

  return (
    <Flex direction="column" gap={30}>
      <HeadingLayout loading={!trash}>
        <Title order={2}>{appStrings.language.trashProjects.heading}</Title>
        <Flex>
          <Button color="red" leftSection={<IconTrash size="1rem" />}>
            {appStrings.language.trashProjects.deletePermanentlyBtn}
          </Button>
        </Flex>
      </HeadingLayout>
      {trash?.length !== 0 ? (
        <ProjectGridLayout loading={!trash}>
          {trash?.map((data) => (
            <ProjectCard
              key={data.id}
              title={data.name}
              description={data.description}
              alias={data.alias}
              actions={
                <DeleteProjectAction
                  onRestoreTap={() => handleRestoreProject(data.id)}
                />
              }
              disableNavigate
            />
          ))}
        </ProjectGridLayout>
      ) : (
        <Empty />
      )}
    </Flex>
  );
}
