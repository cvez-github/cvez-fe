import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  Title,
  TextInput,
  Textarea,
  Flex,
  Group,
  Button,
  Select,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import { IconCalendarEvent } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import appStrings from "../../utils/strings";
import criteriaSet from "../../utils/criteria";
import { getAliasByName } from "../../utils/utils";
import { createPositionControl } from "../../controllers/positions";
import usePositionsState from "../../context/position";

// eslint-disable-next-line react/prop-types
export default function CreatePositionModal({ title, open, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.pathname.split("/")[1];
  const [form, setForm] = useState({
    positionName: "",
    positionDescription: "",
    startDate: null,
    endDate: null,
    criteriaSet: criteriaSet[0].criteria,
  });
  const idAlias = useRef(uuidv4());
  const [isLoading, setIsLoading] = useState(false);
  const setPosition = usePositionsState((state) => state.setPosition);

  const handleInputChange = (event) => {
    setForm({ ...form, positionName: event.target.value });
  };

  const handleChangeDescription = (event) => {
    setForm({ ...form, positionDescription: event.target.value });
  };

  const handleStartDateChange = (value) => {
    setForm({ ...form, startDate: value });
  };

  const handleEndDateChange = (value) => {
    setForm({ ...form, endDate: value });
  };

  const handleChangeCriteriaSet = (index) => {
    setForm({ ...form, criteriaSet: criteriaSet[index].criteria });
  };

  function handleSubmitForm() {
    if (!form.positionName || !form.startDate || !form.endDate) {
      notifications.show({
        title: appStrings.language.notification.fieldRequired,
        color: "red",
      });
      return;
    }
    setIsLoading(true);
    createPositionControl(
      projectId,
      form.positionName,
      getAliasByName(form.positionName, idAlias.current),
      form.positionDescription,
      form.startDate.toISOString(),
      form.endDate.toISOString(),
      form.criteriaSet
    ).then((data) => {
      setIsLoading(false);
      setPosition(data);
      navigate(`/${projectId}/${data.id}`);
    });
  }

  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={<Title order={4}>{title}</Title>}
    >
      <Group gap="lg">
        <TextInput
          label={appStrings.language.createPosition.nameLabel}
          placeholder={appStrings.language.createPosition.nameLabel}
          style={{ width: "100%" }}
          onChange={handleInputChange}
          value={form.positionName}
          required
        />
        <TextInput
          disabled
          label={appStrings.language.createPosition.aliasLabel}
          placeholder={appStrings.language.createPosition.aliasLabel}
          style={{ width: "100%" }}
          value={getAliasByName(form.positionName, idAlias.current)}
        />
        <Textarea
          variant="filled"
          label={appStrings.language.createPosition.descriptionLabel}
          placeholder={appStrings.language.createPosition.descriptionLabel}
          style={{ width: "100%" }}
          value={form.positionDescription}
          onChange={handleChangeDescription}
        />
        <Flex justify="space-between" gap="md">
          <DateInput
            rightSection={<IconCalendarEvent />}
            valueFormat="DD/MM/YYYY"
            label={appStrings.language.createPosition.startDateLabel}
            placeholder="3/26/2024"
            size="sm"
            value={form.startDate}
            onChange={handleStartDateChange}
            maxDate={form.endDate}
            required
          />
          <DateInput
            rightSection={<IconCalendarEvent />}
            valueFormat="DD/MM/YYYY"
            label={appStrings.language.createPosition.endDateLabel}
            placeholder="3/26/2025"
            size="sm"
            value={form.endDate}
            onChange={handleEndDateChange}
            minDate={form.startDate}
            required
          />
        </Flex>
        <Select
          w="100%"
          label={appStrings.language.createPosition.criteriaSetLabel}
          data={criteriaSet.map((criteria, index) => ({
            value: `${index}`,
            label: criteria.label,
          }))}
          defaultValue="0"
          allowDeselect={false}
          onChange={(value) => handleChangeCriteriaSet(parseInt(value))}
        />
      </Group>
      <Flex justify="flex-end" gap="md" style={{ marginTop: "20px" }}>
        <Button variant="default" onClick={onClose}>
          {appStrings.language.btn.cancel}
        </Button>
        <Button onClick={handleSubmitForm} loading={isLoading}>
          {appStrings.language.btn.create}
        </Button>
      </Flex>
    </Modal>
  );
}
