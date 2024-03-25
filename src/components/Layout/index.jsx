import style from "./style.module.css";
import { AppShell, Flex, Group, Container, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../Logo";
import Navbar from "../Navbar";
import User from "../User";

export default function Layout({
  children,
  navItems = [],
  navPreItems = [],
  navPostItems = [],
}) {
  const [opened, { toggle }] = useDisclosure();

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
        <Container className={style.contentContainer}>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
