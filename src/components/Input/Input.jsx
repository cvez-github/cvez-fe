import { TextInput } from '@mantine/core';

export default function Answer({title}) {
  return (
    <TextInput
      placeholder={title}
    />
  );
}