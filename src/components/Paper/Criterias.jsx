import { Fieldset, Group, Flex } from '@mantine/core';
import Addsave from '../Button/Save';
import Addcancel from '../Button/Cancel';
import Input from '../Input/Input';
export default function Criterias() {
    return (
        <Fieldset w="50%" variant='unstyled'>
            <Flex gap='0.5rem'>
                <div style={{ flex: 4 }}>
                    <Input title="Criteria Name" />
                </div>
                <div style={{ flex: 1 }}>
                    <Input title='Priority' />
                </div>
            </Flex>
            <div style={{ marginTop: '10px' }}>
                <Input title="Example" />
            </div>
            <Group justify="flex-end" mt="md">
                <Addcancel />
                <Addsave />
            </Group>
        </Fieldset>
    );
}