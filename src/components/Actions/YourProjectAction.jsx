import { Button, Flex } from "@mantine/core";
import { IconTrash, IconShare } from "@tabler/icons-react";
import appStrings from "../../utils/strings";

export default function YourProjectAction() {
  return (
    <Flex direction="column" gap={5}>
      <Button
        color="gray"
        variant="light"
        leftSection={<IconShare size="1rem" />}
        size="xs"
      >
        {appStrings.language.btn.share}
      </Button>
      <Button
        color="red"
        variant="light"
        leftSection={<IconTrash size="1rem" />}
        size="xs"
      >
        {appStrings.language.btn.delete}
      </Button>
    </Flex>
  );
}
