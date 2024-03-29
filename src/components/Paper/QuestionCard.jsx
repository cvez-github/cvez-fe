import { Fieldset, Flex, Grid } from '@mantine/core';
import Area from '../Input/Textarea';
import Tinput from '../Input/Input';
import Addselect from '../Select/Select';
import AddButton from '../Button/Button';


export default function QuesCard({ QuesCont, Answer, Levels }) {
    return (
        <>
            <Fieldset w="100%" variant='unstyled'>
                <Flex direction="column" gap="md">
                    <Area title={QuesCont} />
                    <Grid grow>
                        <Grid.Col span={9}><Tinput title={Answer} /></Grid.Col>
                        <Grid.Col span={1}> <Addselect title={Levels} /> </Grid.Col>
                    </Grid>
                    <Flex justify="flex-end" gap="md">
                        <AddButton v={"subtle"} c={"gray"} title={"Cancel"} />
                        <AddButton v={"Filled"} title={"Ok"} />
                    </Flex>
                </Flex>
            </Fieldset>
        </>
    );
}
