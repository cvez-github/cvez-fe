import Appbutton from "../../components/Home/Appbutton";
import Search from "../../components/Search/Searchproject";
import CardComponent from "../../components/Home/Card";
import { Group, Flex, Popover } from '@mantine/core';

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
            <CardComponent  
            ProjectName="Sample" 
            ProjectDescription="This is the Description of the first project" 
            ProjectId="axz121sa" 
            />
            <CardComponent 
            ProjectName="Sample" 
            ProjectDescription="This is the Description of the first project" 
            ProjectId="axz121sa" 
            />
            <CardComponent 
            ProjectName="Sample" 
            ProjectDescription="This is the Description of the first project" 
            ProjectId="axz121sa" 
            />
            </Group>
            <Group grow style={{ marginTop: '20px' }}>
            <CardComponent  
            ProjectName="Sample" 
            ProjectDescription="This is the Description of the first project" 
            ProjectId="axz121sa" 
            />
            <CardComponent 
            ProjectName="Sample" 
            ProjectDescription="This is the Description of the first project" 
            ProjectId="axz121sa" 
            />
            <CardComponent 
            ProjectName="Sample" 
            ProjectDescription="This is the Description of the first project" 
            ProjectId="axz121sa" 
            />
            </Group>
        </>
    );
    }