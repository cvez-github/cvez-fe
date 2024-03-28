import { Button } from '@mantine/core';

export default function AddButton({v,c,title}) {
  return <Button variant={v}  color={c}>{title}</Button>;
}