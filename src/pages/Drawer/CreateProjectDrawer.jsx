import { Drawer } from "@mantine/core";

export default function CreateProjectDrawer({ open, onClose }) {
  return (
    <Drawer opened={open} onClose={onClose} size="100%" position="right">
      Hello
    </Drawer>
  );
}
