import style from "./style.module.css";
import Logo from "../../components/Logo";
import { useDisclosure } from "@mantine/hooks";
import Banner from "../../assets/banner.png";
import About from "../../assets/About.png";
import appStrings from "../../utils/strings";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import BannerBackGround from "../../assets/BannerBackground.png";
import AboutBackGround from "../../assets/AboutBackground.png";
import { ActionIcon, AppShell, Button, Flex, Text, Title } from "@mantine/core";
export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Flex h="100%" align="center" justify="space-between" px="xl">
          <Logo size={35} />
          <Flex gap="sm">
            <Button variant="subtle" onClick={() => navigate("/dashboard")}>
              {appStrings.language.btn.home}
            </Button> 
            <Link to="aboutSection" smooth={true} duration={500}>
              <Button variant="subtle">{appStrings.language.btn.about}</Button>
            </Link>
            <Link to="contactSection" smooth={true} duration={500}>
              <Button variant="subtle">{appStrings.language.btn.contact}</Button>
            </Link>
            <Button variant="filed" onClick={() => navigate("/Login")}>
              {appStrings.language.btn.sign}
            </Button>
          </Flex>
        </Flex>
      </AppShell.Header>
      <div
        style={{
          backgroundImage: `url(${BannerBackGround})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppShell.Main className={style["app-shell-main"]}>
          <Flex direction="column" gap="sm">
            <Title order={1}>{appStrings.language.landing.title} </Title>
            <p>{appStrings.language.landing.take}</p>
            <Flex>
              <Button variant="filled" onClick={() => navigate("/dashboard")}>
              {appStrings.language.btn.start}
              </Button>
            </Flex>
          </Flex>
          <div className={style["image-container"]}>
            <img src={Banner} />
          </div>
        </AppShell.Main>
        <div
          style={{
            backgroundImage: `url(${AboutBackGround})`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Element name="aboutSection">
            <AppShell.Main className={style["app-shell-main"]}>
              <div className={style["about-image-container"]}>
                <img src={About} />
              </div>
              <Flex direction="column" gap="sm">
                <Title order={1}> {appStrings.language.landing.abouttitle} </Title>
                <Title order={4}>
                  {appStrings.language.landing.about}
                </Title>
                <Text size="sm" className={style.text}>
                  {appStrings.language.landing.aboutcontent1}
                </Text>
                <Text size="sm" className={style.text}>
                  {appStrings.language.landing.aboutcontent2}
                </Text>
              </Flex>
            </AppShell.Main>
          </Element>
        </div>
      </div>
      <Element name="contactSection">
        <AppShell.Main className={style["app-shell-main-contact"]}>
          <Flex
            direction="column"
            gap="sm"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Title order={1}>{appStrings.language.landing.contacttitle}</Title>
            <Text size="sm">
              {appStrings.language.landing.contactcontent1}
            </Text>
            <Flex
              direction="row"
              gap="sm"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <ActionIcon>
                <a
                  href="https://github.com/cvez-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub />
                </a>
              </ActionIcon>
              <ActionIcon>
                <a
                  href="https://www.facebook.com/hoangnt1209"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandFacebook />
                </a>
              </ActionIcon>
              <ActionIcon>
                <a
                  href="https://www.linkedin.com/in/hoangnt1209/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin />
                </a>
              </ActionIcon>
            </Flex>
            <Text size="sm">{appStrings.language.landing.contactcontent2}</Text>
            <Text size="sm">contact@cvez-team.com</Text>
            <Text size="sm">{appStrings.language.landing.contactcontent3}</Text>
          </Flex>
        </AppShell.Main>
      </Element>
      <AppShell.Footer className={style["app-shell-footer"]}>
        <Flex h="100%" align="center" justify="center" px="lg">
          <Text size="sm">© 2024 CVEZ. All rights reserved</Text>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
}
