import { Alert, FileButton, Button, Group} from '@mantine/core';
import { useState } from 'react';
import { Title } from '@mantine/core';

export default function Uploadqu() {
  const [file, setFile] = useState(null);

  return (
    <Alert variant="light" color="blue">
      <Group justify="space-between" align='center'>
        <div>
        <Title order={4}>Upload question from file</Title>
          Upload question to bank from JSON question data.
        </div>
          <FileButton onChange={setFile} accept="application/json">
          {(props) => <Button {...props}>Upload Question</Button>}
          </FileButton>
      </Group>

    </Alert>
  );
}