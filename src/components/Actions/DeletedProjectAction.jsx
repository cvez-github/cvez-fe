import { Button, Flex } from "@mantine/core";
import { IconRestore, IconTrash } from "@tabler/icons-react";
import appStrings from "../../utils/strings";

export default function DeleteProjectAction() {
  return (
    <Flex direction="column" gap={5}>
      <Button
        color="gray"
        variant="light"
        leftSection={<IconRestore size="1rem" />}
        size="xs"
      >
        {appStrings.language.btn.restore}
      </Button>
      <Button
        color="red"
        variant="light"
        leftSection={<IconTrash size="1rem" />}
        size="xs"
      >
        {appStrings.language.trash.deletePermanently}
      </Button>
    </Flex>
  );
}
