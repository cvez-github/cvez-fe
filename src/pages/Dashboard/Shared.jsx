import Uploadcv from '../../components/Upload/Uploadcv';
import Addalert from '../../components/Alert/Addalert';
import Search from "../../components/Search/Searchproject";
import Addselect from "../../components/Select/Select";
import Table from '../../components/Table/Table';
import Pagination from '../../components/Pagination/Pagination';
import { Flex, Title } from '@mantine/core';

export default function Shared() {
    return (
        <>
            <Flex w="80%" direction='column' gap='1rem' style={{ marginBottom: '1rem' }}>
                <Title order={2}>CV Data</Title>
                <Uploadcv />
                <Addalert title='https://mantine.dev/' />
            </Flex>
            <Flex gap='1rem'>
                <Search title={'Search'} />
                <div style={{ width: '10%' }}>
                    <Addselect title='Choise' />
                </div>
            </Flex>
            <Flex w="80%" direction='column' gap='1rem' style={{ marginTop: '1rem' }}>
                <Table />
            </Flex>
            <Flex w="80%" justify="center" style={{ marginTop: '1rem' }}>
                <Pagination />
            </Flex>
        </>
    );
}