import {
  Flex,
  Title,
  Button,
  ActionIcon,
  Select,
  Input,
  Fieldset,
  Textarea,
  TextInput,
  Paper,
  Text,
  Badge,
  Menu,
  Group,
  Breadcrumbs,
  Anchor
} from "@mantine/core";
import { IconDots, IconTrash, IconEdit } from "@tabler/icons-react";
import { useState } from 'react';
import appStrings from "../../utils/strings";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import { useLocation, useNavigate } from "react-router-dom";

export default function QuestionDetailPage() {
  const [content, setContent] = useState('');
  const [answer, setAnswer] = useState('');
  const [level, setLevel] = useState('');
  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];

  const bankname = location.pathname.split("/")[4];

  function handleNavigateToQuestionBank() {
    navigate(`/${projectId}/${positionId}/questions`)
  }

  const handleOk = () => {
    if (editingIndex !== null) {
      setQuestions(questions.map((question, index) => index === editingIndex ? { content, answer, level } : question));
      setEditingIndex(null);
    } else {
      setQuestions([{ content, answer, level }, ...questions]);
    }
    setContent('');
    setAnswer('');
    setLevel('');
    setIsCreating(false); // Set isCreating to false when OK is clicked

  };

  const handleEdit = (question, index) => {
    setContent(question.content);
    setAnswer(question.answer);
    setLevel(question.level);
    setEditingIndex(index);
  };

  return (
    <>
      <Flex direction="column" gap="xl" w='60%'>
        <HeadingLayout>
          <Breadcrumbs>
            <Anchor onClick={handleNavigateToQuestionBank}>{appStrings.language.breadcrumb.questionBank}</Anchor>
            <Anchor>{bankname}</Anchor>
          </Breadcrumbs>
        </HeadingLayout>
        <Flex justify='space-between'>
          <Title order={1}>{bankname}</Title>
          <Flex gap='xs'>
            <Button>{appStrings.language.button.save}</Button>
            <Button variant="default" onClick={
              () => handleNavigateToQuestionBank()
            }>
              {appStrings.language.button.cancel}</Button>
          </Flex>
        </Flex>
        <Flex gap='md'>
          <Input
            placeholder={appStrings.language.questionDetail.search}
          />
          <Select w="15%"
            placeholder={appStrings.language.choice.title}
            data={['React', 'Angular', 'Vue', 'Svelte']}
          />
        </Flex>
        <Flex justify='space-between'>
          <Title order={2}>{appStrings.language.questionDetail.questions}</Title>
          <Button onClick={() => setIsCreating(true)}>{appStrings.language.questionDetail.create}</Button>
        </Flex>
        {isCreating && (
          <Fieldset variant="unstyled">
            <Flex gap='md' direction='column'>
              <Textarea
                placeholder={appStrings.language.questionDetail.questioncontent}
                autosize
                minRows={6}
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
              <Flex gap='md'>
                <TextInput w='90%'
                  placeholder={appStrings.language.questionDetail.answer}
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                />
                <TextInput w='10%'
                  placeholder={appStrings.language.questionDetail.level}
                  value={level}
                  onChange={(event) => setLevel(event.target.value)}
                />
              </Flex>
              <Flex justify='flex-end' gap='md'>
                <Button variant="default" onClick={() => setIsCreating(false)}>{appStrings.language.button.cancel}</Button>
                <Button onClick={handleOk}>{appStrings.language.questionDetail.ok}</Button>
              </Flex>
            </Flex>
          </Fieldset>
        )}
        {questions.map((question, index) => {
          if (index === editingIndex) {
            return (
              <Fieldset variant="unstyled" key={index}>
                <Flex gap='md' direction='column'>
                  <Textarea
                    placeholder={appStrings.language.questionDetail.questioncontent}
                    autosize
                    minRows={6}
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                  />
                  <Flex gap='md'>
                    <TextInput w='90%'
                      placeholder={appStrings.language.questionDetail.answer}
                      value={answer}
                      onChange={(event) => setAnswer(event.target.value)}
                    />
                    <TextInput w='10%'
                      placeholder={appStrings.language.questionDetail.level}
                      value={level}
                      onChange={(event) => setLevel(event.target.value)}
                    />
                  </Flex>
                  <Flex justify='flex-end' gap='md'>
                    <Button variant="default" onClick={() => setEditingIndex(null)}>{appStrings.language.button.cancel}</Button>
                    <Button onClick={handleOk}>{appStrings.language.questionDetail.ok}</Button>
                  </Flex>
                </Flex>
              </Fieldset>
            );
          } else {
            return (
              <Paper key={index} shadow="sm" withBorder p="xl">
                <Flex gap='md' direction='column'>
                  <Flex justify='space-between'>
                    <Text>{question.content}</Text>
                    <Menu withinPortal shadow="md" position="top-end" width={150}>
                      <Menu.Target>
                        <ActionIcon variant="light" color="gray">
                          <IconDots />
                        </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown p={5}>
                        <Menu.Item c="gray" leftSection={<IconEdit size="1rem" />} onClick={() => handleEdit(question, index)}>
                          {appStrings.language.btn.edit}
                        </Menu.Item>
                        <Menu.Item c="red" leftSection={<IconTrash size="1rem" />}>
                          {appStrings.language.btn.delete}
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Flex>
                  <Group justify="space-between">
                    <Text c="blue">{appStrings.language.questionDetail.answer}: {question.answer}</Text>
                    <Badge variant="light" color="gray" size="sm" circle>
                      {question.level}
                    </Badge>
                  </Group>
                </Flex>
              </Paper>
            );
          }
        })}
      </Flex>
    </>
  );
}