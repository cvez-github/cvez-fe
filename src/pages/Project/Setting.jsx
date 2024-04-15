import { Flex, Title, ActionIcon, Group, Avatar } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import SettingLayout from "../../components/Layout/SettingLayout";
import TableSettingCard from "../../components/SettingCard/Table";
import { useEffect, useState } from "react";
import useGlobalState from "../../context/global";
import useProjectsState from "../../context/project";
import { useLocation } from "react-router-dom";

export default function ProjectSettingPage() {
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const user = useGlobalState((state) => state.user);
  const projects = useProjectsState((state) => state.projects);
  const shared = useProjectsState((state) => state.shared);
  const [members, setMembers] = useState([]);
  const [isDisableActions, setIsDisableActions] = useState(false);

  useEffect(() => {
    // Find the project by id
    let project = projects?.find((project) => project.id === projectId);
    // If the project is not found in the owned projects, find it in the shared projects
    if (!project) {
      project = shared?.find((project) => project.id === projectId);
      setIsDisableActions(true);
    }
    // If the project is found, set the members
    if (project) {
      const mems = project.members.map((mem) => ({
        name: mem.name,
        email: mem.email,
        avatar: mem.avatar,
        role: appStrings.language.setting.member.roles.member,
      }));
      // Append the owner to the members if the user is the owner
      mems.unshift({
        name: user?.name,
        email: user?.email,
        avatar: user?.avatar,
        role: appStrings.language.setting.member.roles.owner,
      });
      setMembers(mems);
    }
  }, []);

  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={2}>{appStrings.language.setting.heading}</Title>
      </HeadingLayout>
      <SettingLayout title={appStrings.language.setting.member.title}>
        <TableSettingCard
          loading={!projects || !shared}
          disableActions={isDisableActions}
          data={members.map((member, index) => {
            return [
              <Group>
                <Avatar size="sm" radius="xl" src={member.avatar} />
                {member.name}
              </Group>,
              member.email,
              member.role,
              member.role !== appStrings.language.setting.member.roles.owner ? (
                <ActionIcon variant="subtle" size="sm" color="red">
                  <IconTrash size="1rem" />
                </ActionIcon>
              ) : null,
            ];
          })}
        />
      </SettingLayout>
    </Flex>
  );
}
