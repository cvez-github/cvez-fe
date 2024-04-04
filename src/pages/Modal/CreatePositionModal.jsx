import { Modal, Title, TextInput, Textarea, Flex, Group, Button, Select } from "@mantine/core";
import { DateInput } from '@mantine/dates';
import { IconCalendarEvent } from '@tabler/icons-react';
import { useState } from 'react';
import appStrings from "../../utils/strings";
import criteriaSet from "../../utils/criteria";


// eslint-disable-next-line react/prop-types
export default function CreatePositionModal({ title, open, onClose }) {
  const [positionName, setpositionName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleInputChange = (event) => {
    setpositionName(event.target.value);
  }

  const handleStartDateChange = (value) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value) => {
    if (startDate && value < startDate) {
      alert('End date cannot be before start date');
      return;
    }
    setEndDate(value);
  };

  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={<Title order={4}>{title}</Title>}
    >
      <Group gap='lg'>
        <TextInput
          label={appStrings.language.createPosition.positionName}
          placeholder= {appStrings.language.createPosition.positionName}
          style={{ width: '100%' }}
          onChange={handleInputChange}
        />
        <TextInput disabled
          label={appStrings.language.createPosition.positionAlias}
          placeholder= {appStrings.language.createPosition.positionAlias}
          style={{ width: '100%' }}
          value={positionName}
        />
        <Textarea
          variant="filled"
          label={appStrings.language.createPosition.positionDescription}
          placeholder= {appStrings.language.createPosition.positionDescription}
          style={{ width: '100%' }}
        />
        <Flex justify="space-between" gap='md'>
          <DateInput
            rightSection={<IconCalendarEvent />}
            valueFormat="DD/MM/YYYY"
            label={appStrings.language.date.startDate}
            placeholder="3/26/2024"
            size="sm"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <DateInput
            rightSection={<IconCalendarEvent />}
            valueFormat="DD/MM/YYYY"
            label={appStrings.language.date.endDate}
            placeholder="3/26/2025"
            size="sm"
            value={endDate}
            onChange={handleEndDateChange}
            minDate={startDate}
          />
        </Flex>
        <Select w="100%" label="Criteria Set" data={criteriaSet.map((criteria, index) => ({ value: `${index}`, label: criteria.label }))} defaultValue="0"/>
      </Group>
      <Flex justify="flex-end" gap='md' style={{ marginTop: '20px' }}>
          <Button variant="default" onClick={onClose}>{appStrings.language.createPosition.cancel}</Button>
          <Button>{appStrings.language.createPosition.create}</Button>
      </Flex>
    </Modal >

  );
}
