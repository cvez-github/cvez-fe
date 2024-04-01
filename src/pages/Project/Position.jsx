import { Button, Flex, Title, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import GridLayout from "../../components/Layout/GridLayout";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import CreatePositionModal from "../Modal/CreatePositionModal";

export default function YourPositionPage() {
  const [isNewPositionOpen, isNewPositionToggle] = useDisclosure(false);
  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={2}>{appStrings.language.position.heading}</Title>
        <Flex gap={15}>
          <Input
            placeholder={appStrings.language.position.searchPlaceholder}
            rightSection={<IconSearch size="1rem" />}
          />
          <Button
            leftSection={<IconPlus size="1rem" />}
            onClick={isNewPositionToggle.open}
          >
            {appStrings.language.position.createBtn}
          </Button>
        </Flex>
      </HeadingLayout>
      <GridLayout
        title={appStrings.language.position.activePosition}
      ></GridLayout>
      <GridLayout
        title={appStrings.language.position.closedPosition}
      ></GridLayout>
      <CreatePositionModal
        title={appStrings.language.position.createBtn}
        open={isNewPositionOpen}
        onClose={isNewPositionToggle.close}
      />
    </Flex>
  );
}
