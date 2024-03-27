import { Select } from '@mantine/core';

export default function Addselect({title}) {
  return (
    <Select
      variant="filled"
      placeholder={title}
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}