import { Alert, FileButton, Button, Group} from '@mantine/core';
import { useState } from 'react';
import { Title } from '@mantine/core';

export default function Uploadjd() {
  const [file, setFile] = useState(null);

  return (
    <Alert variant="light" color="blue">
      <Group justify="space-between" align='center'>
        <div>
        <Title order={4}>Extracted from PDF</Title>
          Quick extraction text from to file.
        </div>
        <FileButton onChange={setFile} accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
        {(props) => <Button {...props}>Upload PDF</Button>}
        </FileButton>
      </Group>
    </Alert>
  );
}