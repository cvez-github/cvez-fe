import Appbutton from "../../components/Home/Appbutton";
import CardComponent from "../../components/Home/Card";
import { SimpleGrid, Flex, Title } from '@mantine/core';

export default function Home() {
    
    return (
        <>  
            <Flex direction="column" gap="xl">
            <Flex
            justify='space-between'>
                <Title order={1}>Welcome</Title>
                <Appbutton />
            </Flex>
            <Title order={3}>Your recent project</Title>
            <SimpleGrid cols={3} spacing="md">
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
            <CardComponent 
            ProjectName="Sample" 
            ProjectDescription="This is the Description of the first project" 
            ProjectId="axz121sa" 
            />
            </SimpleGrid>
            <Title order={3}>Shared with you</Title>
            <SimpleGrid cols={3} spacing="md">
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
            </SimpleGrid>
            </Flex>
        </>
    );
    }