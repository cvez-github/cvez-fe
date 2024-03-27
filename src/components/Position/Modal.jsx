  import React, { useState } from 'react';
  import { useDisclosure } from '@mantine/hooks';
  import { Modal, Button, Textarea, Space, Flex } from '@mantine/core';
  import { DateInput } from '@mantine/dates';

  export default function CustomModal() {
    const [opened, { open, close }] = useDisclosure(false);
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
      <>
        <Modal  opened={opened} onClose={close} title="Create new position" centered>
          
          <Flex gap="md" direction="column">
          <Textarea variant="filled" description="Position name" placeholder="Position name"  />
          <Textarea placeholder="position-alias" />
          <Textarea variant="filled" size="lg"  placeholder="Position description"  />
          </Flex>

          <Flex justify="space-between">
            <DateInput
              valueFormat="DD/MM/YYYY"
              label="Start date"
              placeholder="3/26/2024"
              size="sm"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <DateInput
            
              valueFormat="DD/MM/YYYY"
              label="End date"
              placeholder="3/26/2024"
              size="sm"
              value={endDate}
              onChange={handleEndDateChange}
              minDate={startDate}
            />
          </Flex>

          <Space h="md" />

          <Flex justify="flex-end " gap="md">
          <Button onClick={close} variant="light" color="red"><i>Cancel</i> </Button>
          <Button variant="light"><i>Create new project</i></Button>
          </Flex>
        
        </Modal>

        <Button onClick={open}>Create new position</Button>
      </>
    );
  }
