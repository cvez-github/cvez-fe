// drawer.jsx
import React from 'react';
import { Drawer, Flex, TextInput, Textarea, Button} from '@mantine/core';

const commonStyles = { width: '100%', marginBottom: '20px' };

function CustomDrawer({ isOpen, onClose }) {
  return (
    <Drawer position="right" size="100%" opened={isOpen} onClose={onClose}>
        <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        >   
        <div style={{ width: '35%' }}>
            <h1 style={commonStyles}>Create new project </h1>
            <TextInput
              placeholder="Project name"
              label="Project name"
              variant="filled"
              style={commonStyles}
            />
            <TextInput
              placeholder="Project-alias"
              variant="unstydled"
              style={commonStyles}
            />
            <Textarea
              variant="filled"
              placeholder="project description"
              style={commonStyles}
            />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="default" style={{ marginRight: '10px' }} onClick={onClose}>Cancel</Button>
                <Button>Create new project</Button>
            </div>
        </div>
        </Flex>
    </Drawer>
  );
}

export default CustomDrawer;