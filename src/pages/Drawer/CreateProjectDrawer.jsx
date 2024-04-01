import { useState } from 'react';
import { Drawer, Flex, TextInput, Textarea, Button, Title, Container } from '@mantine/core';
import appStrings from '../../utils/strings';

const commonStyles = { width: '100%' };
const demoProps = {
  h: 50,
  mt: 'md',
};

export default function CreateProjectDrawer({ open, onClose }) {
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  };

  return (
    <Drawer opened={open} onClose={onClose} size="100%" position="right">
      <Container size='xs' {...demoProps}>
        <Flex
          gap="lg"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Title order={1} style={{ width: '100%' }}>{appStrings.language.createProject.title}</Title>
          <TextInput
            label={appStrings.language.createProject.projectName}
            placeholder={appStrings.language.createProject.projectName}
            variant="filled"
            style={{ width: '100%' }}
            onChange={handleInputChange}
          />
          <TextInput disabled
            label={appStrings.language.createProject.projectAlias}
            placeholder={appStrings.language.createProject.projectAlias}
            style={{ width: '100%' }}
            value={projectName}
          />
          <Textarea
            variant="filled"
            label={appStrings.language.createProject.projectDescription}
            placeholder={appStrings.language.createProject.projectDescription}
            style={{ width: '100%' }}
          />
        </Flex>
        <Flex justify="flex-end" gap='md' style={{ marginTop: '20px' }}>
          <Button variant="default" onClick={onClose}>{appStrings.language.createProject.cancel}</Button>
          <Button>{appStrings.language.createProject.create}</Button>
        </Flex>
      </Container>
    </Drawer>
  );
}