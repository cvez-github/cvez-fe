import { Button, Card, Center, Flex, Modal, Text, Title } from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import bg from "../../assets/bg.webp";
import Logo from "../../components/Logo";
import appStrings from "../../utils/strings";

export default function LoginPage() {
  return (
    <Flex
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      align="center"
      justify="center"
    >
      <Modal
        opened
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.1,
          blur: 5,
        }}
        yOffset={70}
        padding={24}
        radius="md"
      >
        <Flex direction="column" align="center">
          <Logo size={25} />
          <Text size="1.3rem" style={{ marginTop: 20 }}>
            {appStrings.language.login}
          </Text>
          <Button
            w="100%"
            variant="gradient"
            gradient={{ from: "#89C4DF", to: "#31AFD8", deg: 90 }}
            style={{ marginTop: 40 }}
            leftSection={<IconBrandGoogleFilled size="1rem" />}
          >
            Google
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
}
