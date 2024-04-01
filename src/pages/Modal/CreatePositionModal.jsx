import { Modal, Title } from "@mantine/core";

export default function CreatePositionModal({ title, open, onClose }) {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={<Title order={4}>{title}</Title>}
    >
      Hello
    </Modal>
  );
}
