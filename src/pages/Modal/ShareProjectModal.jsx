import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Avatar, Group, Text, MultiSelect, Flex } from '@mantine/core';
import appStrings from '../../utils/strings';

const usersData = {
    'Emily Johnson': {
        image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
        email: 'emily92@gmail.com',
    },
    'Ava Rodriguez': {
        image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
        email: 'ava_rose@gmail.com',
    },
    'Olivia Chen': {
        image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
        email: 'livvy_globe@gmail.com',
    },
    'Ethan Barnes': {
        image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        email: 'ethan_explorer@gmail.com',
    },
    'Mason Taylor': {
        image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        email: 'mason_musician@gmail.com',
    },
};

const renderAutocompleteOption = ({ option }) => (
    <Group gap="sm">
        <Avatar src={usersData[option.value].image} size={36} radius="xl" />
        <div>
            <Text size="sm">{option.value}</Text>
            <Text size="xs" opacity={0.5}>
                {usersData[option.value].email}
            </Text>
        </div>
    </Group>
);

export default function LangdingPage() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal opened={opened} onClose={close} title={appStrings.language.share.title}>
                <MultiSelect
                    data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
                    renderOption={renderAutocompleteOption}
                    maxDropdownHeight={300}
                    placeholder={appStrings.language.share.search}
                    searchable
                />
                <Flex justify="flex-end" style={{ marginTop: '20px' }} gap='sm'>
                    <Button variant='default' onClick={close}>{appStrings.language.share.cancel}</Button>
                    <Button>{appStrings.language.Share.share}</Button>
                </Flex>
            </Modal>
            <Button onClick={open}>{appStrings.language.Share.shareproject}</Button>
        </>
    );
}