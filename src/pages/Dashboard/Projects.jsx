import Appbutton from "../../components/Home/Appbutton";
import Search from "../../components/Search/Searchproject";
import CardComponent from "../../components/Home/Card";
import { Group, Flex } from '@mantine/core';

export default function Home() {
    return (
        <>
            <Flex w="100%"
            justify="space-between">
                <h1>Your project</h1>
                <Group
                justify="flex-end">
                    <Search />
                    <Appbutton />
                </Group>

            </Flex>
            <Group grow style={{ marginTop: '20px' }}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </Group>
            <Group grow style={{ marginTop: '20px' }}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </Group>
        </>
    );
    }