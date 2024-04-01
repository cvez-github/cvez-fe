import {
  AppShell,
  Flex,
  Group,
  Container,
  Burger,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../Logo";
import Navbar from "../Navbar";
import User from "../User";
import { useLocation, useNavigate } from "react-router-dom";
import appStrings from "../../utils/strings";

const mockData = [
  {
    title: "Project 1",
    description: "Description 1",
    alias: "P1",
    members: [],
  },
  {
    title: "Project 2",
    description: "Description 2",
    alias: "P2",
    members: [],
  },
];

export default function AppLayout({
  children,
  navItems = [],
  navPreItems = [],
  navPostItems = [],
}) {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const isDashboard = location.pathname.includes("dashboard");
  const navigate = useNavigate();

  function handleNavigateToProject(value) {
    navigate(`/${value}`);
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
            <Logo size={35} />
            {!isDashboard ? (
              <Select
                w="13rem"
                allowDeselect={false}
                variant="light"
                value={projectId}
                data={[
                  {
                    group: appStrings.language.yourProject.title,
                    items: mockData.map((item) => ({
                      value: item.alias,
                      label: item.title,
                    })),
                  },
                ]}
                onChange={(value) => handleNavigateToProject(value)}
              />
            ) : null}
          </Group>
          <User />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar
          preItems={navPreItems}
          items={navItems}
          postItems={navPostItems}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container
          style={{
            maxWidth: "1400px",
            width: "100%",
          }}
        >
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
