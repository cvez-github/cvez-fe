import { Button, Flex, Title, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import GridLayout from "../../components/Layout/GridLayout";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import CreatePositionModal from "../Modal/CreatePositionModal";
import PositionCard from "../../components/PositionCard";
import YourProjectAction from "../../components/Actions/YourProjectAction";

const mockData = [
  {
    title: "Position 1",
    description: "Description 1",
    alias: "P1",
    start_date: "Jan, 5",
    end_date: "Jan, 10",
  },
  {
    title: "Position 2",
    description: "Description 2",
    alias: "P2",
    start_date: "Jan, 5",
    end_date: "Jan, 10",
  },
  {
    title: "Position 3",
    description: "Description 3",
    alias: "P3",
    start_date: "Jan, 5",
    end_date: "Jan, 10",

  },

];

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
      <GridLayout title={appStrings.language.position.activePosition}>
          {mockData.map((data, index) =>
          <PositionCard
            key={index}
            title={data.title}
            description={data.description}
            alias={data.alias}
            start_date={data.start_date}
            end_date={data.end_date}
            actions={<YourProjectAction />}
          />
        )}
      </GridLayout>
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
