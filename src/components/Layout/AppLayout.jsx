/* eslint-disable react/prop-types */
import {
  AppShell,
  Flex,
  Group,
  Container,
  Burger,
  Select,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import User from "../User";
import { useLocation, useNavigate } from "react-router-dom";
import appStrings from "../../utils/strings";
import useProjectsState from "../../context/project";
import { logoutControl } from "../../controllers/auth";

export default function AppLayout({
  children,
  navItems = [],
  navPreItems = [],
  navPostItems = [],
  aside,
}) {
  const [opened, { toggle }] = useDisclosure();
  const [asideOpened, { toggle: toggleAside }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const location = useLocation();
  const projects = useProjectsState((state) => state.projects);
  const shared = useProjectsState((state) => state.shared);
  const projectId = location.pathname.split("/")[1];
  const isDashboard = location.pathname.includes("dashboard");

  function handleNavigateToDashboard() {
    navigate("/dashboard");
  }

  function handleLogout() {
    // Logout
    logoutControl();
    // Navigate to login page
    navigate("/login");
  }

  function handleViewUser() {}

  function handleChangeProject(id) {
    navigate(`/${id}`);
    window.location.reload();
  }

  function getActiveIndex() {
    let activeIndex = navItems.findIndex(
      (item) => item.to === location.pathname
    );
    if (activeIndex === -1) {
      activeIndex = navPreItems.findIndex(
        (item) => item.to === location.pathname
      );
    }
    if (activeIndex === -1) {
      activeIndex = navPostItems.findIndex(
        (item) => item.to === location.pathname
      );
    }
    return activeIndex;
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Flex h="100%" align="center" justify="space-between" px="xl">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Logo size={35} onTap={handleNavigateToDashboard} />
            {projects && shared && !isDashboard ? (
              <Select
                w="13rem"
                allowDeselect={false}
                variant="light"
                value={projectId}
                data={[
                  {
                    group: appStrings.language.yourProject.title,
                    items: projects.map((item) => ({
                      value: item.id,
                      label: item.name,
                    })),
                  },
                  {
                    group: appStrings.language.sharedProjects.title,
                    items: shared.map((item) => ({
                      value: item.id,
                      label: item.name,
                    })),
                  },
                ]}
                onChange={(value) => handleChangeProject(value)}
              />
            ) : null}
          </Group>
          <User onUserTap={handleViewUser} onLogoutTap={handleLogout} />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar
          activeIndex={getActiveIndex()}
          preItems={navPreItems}
          items={navItems}
          postItems={navPostItems}
        />
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          marginRight: asideOpened
            ? "40rem"
            : aside && !isMobile
            ? "48px"
            : "0",
        }}
      >
        <Container
          style={{
            maxWidth: "1400px",
            width: "100%",
          }}
        >
          {children}
        </Container>
      </AppShell.Main>
      {aside && !isMobile ? (
        <AppShell.Aside w={asideOpened ? "40rem" : "auto"}>
          {asideOpened ? (
            <Flex direction="column" p="md" gap="md">
              <ActionIcon onClick={toggleAside} variant="subtle">
                <IconChevronRight size="1rem" />
              </ActionIcon>
              {aside}
            </Flex>
          ) : (
            <Flex direction="column" p="xs">
              <ActionIcon onClick={toggleAside} variant="subtle">
                <IconChevronLeft size="1rem" />
              </ActionIcon>
            </Flex>
          )}
        </AppShell.Aside>
      ) : null}
    </AppShell>
  );
}
