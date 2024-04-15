import { Flex, Title, ActionIcon, Text, Button, Menu } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import PositionAction from "../../components/Actions/PositionAction";
import { IconCalendarEvent } from "@tabler/icons-react";
import appStrings from "../../utils/strings";

import { useState, useEffect } from "react";
import usePositionsState from "../../context/position";
import EditableCriteriaCard from "../../components/CriteriaCard";

export default function PositionGeneralPage() {
  const position = usePositionsState((state) => state.position);
  const setPosition = usePositionsState((state) => state.setPosition);
  const [isNewCriteria, setIsNewCriteria] = useState(false);
  const [form, setForm] = useState({
    startDate: null,
    endDate: null,
  });

  function handleStartDateChange(value) {
    setForm({ ...form, startDate: value });
  }

  function handleEndDateChange(value) {
    setForm({ ...form, endDate: value });
  }

  function handleNewCriteria() {
    setIsNewCriteria(true);
  }

  function handleAddCriteria(data) {
    // Push new criteria to the list
    const newPosition = {
      ...position,
      criterias: [
        ...position.criterias,
        {
          name: data.content,
          example: data.example,
          score: data.priority,
        },
      ],
    };
    setPosition(newPosition);
    setIsNewCriteria(false);
  }

  function handleUpdateCriteria(index, data) {
    console.log(data);
  }

  useEffect(() => {
    if (position) {
      setForm({
        startDate: new Date(position.start_date),
        endDate: new Date(position.end_date),
      });
    }
  }, [position]);

  return (
    <Flex direction="column" gap="lg">
      <HeadingLayout>
        <Title order={1}>{position?.name}</Title>
        <Menu withinPortal shadow="md" position="bottom-end" width={150}>
          <Menu.Target>
            <ActionIcon variant="light" color="gray">
              <IconDots />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <PositionAction />
          </Menu.Dropdown>
        </Menu>
      </HeadingLayout>
      <Text size="lg">{position?.description}</Text>
      <Flex gap="lg">
        <DateInput
          rightSection={<IconCalendarEvent />}
          valueFormat="DD/MM/YYYY"
          label={appStrings.language.positionDetail.startDateLabel}
          placeholder="3/26/2024"
          size="sm"
          value={form.startDate}
          onChange={handleStartDateChange}
          maxDate={form.endDate}
          style={{ flex: 1 }}
        />
        <DateInput
          rightSection={<IconCalendarEvent />}
          valueFormat="DD/MM/YYYY"
          label={appStrings.language.positionDetail.endDateLabel}
          placeholder="3/26/2025"
          size="sm"
          value={form.endDate}
          onChange={handleEndDateChange}
          minDate={form.startDate}
          style={{ flex: 1 }}
        />
      </Flex>
      <Flex justify="space-between">
        <Title order={2}>
          {appStrings.language.positionDetail.criteriaTitle}
        </Title>
        <Button onClick={handleNewCriteria}>
          {appStrings.language.positionDetail.createCriteriaBtn}
        </Button>
      </Flex>
      {isNewCriteria ? (
        <EditableCriteriaCard
          data={{
            content: "",
            example: "",
            priority: 0,
          }}
          onOk={handleAddCriteria}
          onCancel={() => setIsNewCriteria(false)}
          isEdit={true}
        />
      ) : null}
      {position?.criterias.map((cri, index) => (
        <EditableCriteriaCard
          key={index}
          data={{
            content: cri.name,
            example: cri.example,
            priority: cri.score,
          }}
          onOk={(newData) => handleUpdateCriteria(index, newData)}
          isEdit={false}
        />
      ))}
    </Flex>
  );
}
