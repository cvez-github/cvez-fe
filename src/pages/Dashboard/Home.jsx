import Appbutton from "../../components/Home/Appbutton";
import CardComponent from "../../components/Home/Card";
import { Group, Flex } from '@mantine/core';

export default function Home() {
    return (
        <>
            <Flex
            justify='space-between'>
                <h1>Welcome</h1>
                <Appbutton />
            </Flex>
            <p style={{ marginTop: '10px' }}>Your recent project</p>
            <Group grow style={{ marginTop: '20px' }}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </Group>
            <p style={{ marginTop: '30px' }}>Shared width you</p>
            <Group grow style={{ marginTop: '20px' }}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </Group>
        </>
    );
    }