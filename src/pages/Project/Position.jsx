import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Flex, Title, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import GridLayout from "../../components/Layout/GridLayout";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import CreatePositionModal from "../Modal/CreatePositionModal";
import PositionCard from "../../components/PositionCard";
import usePositionsState from "../../context/position";
import Empty from "../../components/Empty";
import { getPositionsControl } from "../../controllers/positions";
import { formatDate } from "../../utils/utils";
import PositionAction from "../../components/Actions/PositionAction";

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
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];

  const positions = usePositionsState((state) => state.positions);
  const setPositions = usePositionsState((state) => state.setPositions);
  const closedPositions = usePositionsState((state) => state.closedPositions);
  const setClosedPositions = usePositionsState(
    (state) => state.setClosedPositions
  );

  useEffect(() => {
    if (!positions || !closedPositions) {
      getPositionsControl(projectId).then((data) => {
        const activePositions = data.filter((position) => !position.is_closed);
        const closedPositions = data.filter((position) => position.is_closed);
        setPositions(activePositions);
        setClosedPositions(closedPositions);
      });
    }
  }, [setPositions, setClosedPositions]);

  return (
    <Flex direction="column" gap="md">
      <HeadingLayout loading={!positions || !closedPositions}>
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
      {positions?.length !== 0 ? (
        <GridLayout
          title={appStrings.language.position.activePositions}
          loading={!positions}
        >
          {positions?.map((data) => (
            <PositionCard
              key={data.id}
              id={data.id}
              title={data.name}
              description={data.description}
              alias={data.alias}
              startDate={formatDate(data.start_date)}
              endDate={formatDate(data.end_date)}
              actions={<PositionAction />}
            />
          ))}
        </GridLayout>
      ) : closedPositions?.length ? (
        <Empty />
      ) : null}
      {closedPositions?.length !== 0 ? (
        <GridLayout
          title={appStrings.language.position.closedPositions}
          loading={!closedPositions}
        >
          {closedPositions?.map((data) => (
            <PositionCard
              key={data.id}
              id={data.id}
              title={data.name}
              description={data.description}
              alias={data.alias}
              startDate={formatDate(data.start_date)}
              endDate={formatDate(data.end_date)}
              actions={<PositionAction isClose />}
            />
          ))}
        </GridLayout>
      ) : null}
      <CreatePositionModal
        title={appStrings.language.position.createBtn}
        open={isNewPositionOpen}
        onClose={isNewPositionToggle.close}
      />
    </Flex>
  );
}
