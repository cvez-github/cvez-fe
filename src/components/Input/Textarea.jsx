import { Textarea } from '@mantine/core';
export default function Area({title}) {
    return (
        <>
            <Textarea
                placeholder={title}
                size='xl'
                minRows={2}
            />
        </>
    );
}