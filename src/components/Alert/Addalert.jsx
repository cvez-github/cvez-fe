import { Alert, CopyButton, Tooltip, rem, ActionIcon, Flex } from '@mantine/core';
import { IconHelp, IconCopy, IconCheck } from '@tabler/icons-react';

export default function addalert({title}) {
  const icon = <IconHelp />;
  return (
    <Alert variant="light" color="grape" radius="xs" title="Share link" icon={icon}>
        <Flex
        align='center'
        gap='0.5rem'>
          Use this link to get access and upload CV to the storage.
          <CopyButton value={title} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
              <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                {copied ? (
                  <IconCheck style={{ width: rem(16) }} />
                ) : (
                  <IconCopy style={{ width: rem(16) }} />
                )}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Flex>
    </Alert>
  );
}