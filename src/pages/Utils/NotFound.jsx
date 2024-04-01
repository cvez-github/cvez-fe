import { Button, Flex, Text, Title } from "@mantine/core";
import Logo from "../../components/Logo";
import appStrings from "../../utils/strings";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  function handleNavigateToHome() {
    navigate("/dashboard");
  }

  return (
    <Flex h="100vh" direction="column" gap="md" justify="center" align="center">
      <Logo />
      <Title
        style={{
          fontSize: "7rem",
        }}
        c="blue"
      >
        404
      </Title>
      <Title order={2}>{appStrings.language.utils.notFound.title}</Title>
      <Text>{appStrings.language.utils.notFound.message}</Text>
      <Button onClick={handleNavigateToHome}>
        {appStrings.language.btn.return}
      </Button>
    </Flex>
  );
}
