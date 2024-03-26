import { IconZoom } from '@tabler/icons-react';
import { Input } from '@mantine/core';


export default function Search() {
    return (
      <Input
        rightSection={<IconZoom size='1rem'/>}
        placeholder="Search project"
        radius="sm"
        size="sm"
      />
    );
  }