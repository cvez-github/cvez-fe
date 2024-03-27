import CardComponent from "../../components/Position/Card";
import CustomModal from "../../components/Position/Modal";
import { SimpleGrid , Flex, Title  } from '@mantine/core';
export default function Trash() {
    return (
        <Flex direction="column" gap="xl">
        <Flex 
        justify='space-between'>
        <Title order={2}>Sample Project</Title>
        <CustomModal /> 
        </Flex>
        Description  of this project 
        <Title order={2}> Active positions</Title>
        <SimpleGrid cols={2} spacing="md">
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
        <Title order={2}> Closed positions</Title>
        </Flex>
    )
}
