import { Flex, Title, ActionIcon, Text, Button, Fieldset, TextInput, Paper, Menu, Group, Badge } from "@mantine/core";
import { IconDots, IconEdit, IconTrash } from "@tabler/icons-react";
import { DateInput } from '@mantine/dates';
import { IconCalendarEvent } from '@tabler/icons-react';
import { useState } from 'react';
import appStrings from "../../utils/strings";

import HeadingLayout from "../../components/Layout/HeadingLayout";

export default function PositionGeneralPage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [content, setContent] = useState('');
  const [example, setExample] = useState('');
  const [priority, setPriority] = useState('');
  const [criterias, setCriterias] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
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

  const handleOk = () => {
    if (editingIndex !== null) {
      setCriterias(criterias.map((criteria, index) => index === editingIndex ? { content, example, priority } : criteria));
      setEditingIndex(null);
    } else {
      setCriterias([{ content, example, priority }, ...criterias]);
    }
    setContent('');
    setExample('');
    setPriority('');
    setIsCreating(false);

  };

  const handleEdit = (question, index) => {
    setContent(question.content);
    setExample(question.example);
    setPriority(question.priority);
    setEditingIndex(index);
  };

  return (
    <Flex direction="column" gap="lg" w="60%">
      <HeadingLayout>
        <Title order={1}>{appStrings.language.criteria.title}</Title>
        <ActionIcon variant="light" color="gray">
          <IconDots />
        </ActionIcon>
      </HeadingLayout>
      <Text size="lg">{appStrings.language.criteria.descript}</Text>
      <Flex gap='lg'>
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
      <Flex justify='space-between'>
        <Title order={2}>{appStrings.language.criteria.criteria}</Title>
        <Button onClick={() => setIsCreating(true)}>{appStrings.language.criteria.create}</Button>
      </Flex>
      {isCreating && (
        <Fieldset variant="unstyled">
          <Flex gap='md' direction='column'>
            <Flex gap='md'>
              <TextInput w='90%'
                placeholder={appStrings.language.criteria.name}
                onChange={(event) => setContent(event.target.value)}
              />
              <TextInput w='10%'
                placeholder={appStrings.language.criteria.priority}
                onChange={(event) => setPriority(event.target.value)}
              />
            </Flex>
            <TextInput
              placeholder={appStrings.language.criteria.example}
              onChange={(event) => setExample(event.target.value)}
            />
            <Flex justify='flex-end' gap='md'>
              <Button variant="default" onClick={() => setIsCreating(false)}>{appStrings.language.button.cancel}</Button>
              <Button onClick={handleOk}>{appStrings.language.button.save}</Button>
            </Flex>
          </Flex>
        </Fieldset>
      )}
      {criterias.map((criteria, index) => {
        if (index === editingIndex) {
          return (
            <Fieldset variant="unstyled">
              <Flex gap='md' direction='column'>
                <Flex gap='md'>
                  <TextInput w='90%'
                    placeholder={appStrings.language.criteria.name}
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                  />
                  <TextInput w='10%'
                    placeholder={appStrings.language.criteria.priority}
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                  />
                </Flex>
                <TextInput
                  placeholder={appStrings.language.criteria.example}
                  value={example}
                  onChange={(event) => setExample(event.target.value)}
                />
                <Flex justify='flex-end' gap='md'>
                  <Button variant="default" onClick={() => setEditingIndex(null)}>{appStrings.language.button.cancel}</Button>
                  <Button onClick={handleOk}>{appStrings.language.button.save}</Button>
                </Flex>
              </Flex>
            </Fieldset>
          );
        } else {
          return (
            <Paper key={index}  shadow="sm" withBorder p="xl">
              <Flex gap='md' direction='column'>
                <Flex justify='space-between'>
                  <Text>{criteria.content}</Text>
                  <Menu withinPortal shadow="md" position="top-end" width={150}>
                    <Menu.Target>
                      <ActionIcon variant="light" color="gray">
                        <IconDots />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown p={5}>
                      <Menu.Item c="gray" leftSection={<IconEdit size="1rem" />} onClick={() => handleEdit(criteria, index)}>
                        {appStrings.language.btn.edit}
                      </Menu.Item>
                      <Menu.Item c="red" leftSection={<IconTrash size="1rem" />}>
                        {appStrings.language.btn.delete}
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Flex>
                <Text>{criteria.example}</Text>
                <Badge variant="light" color="gray" size="sm" circle>{criteria.priority}</Badge>
              </Flex>
            </Paper>
          );
        }
      })}
    </Flex>
  );
}
