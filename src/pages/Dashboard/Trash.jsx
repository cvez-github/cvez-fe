import Delete from "../../components/Button/Delete";
import CardComponent from "../../components/Trash/Card";
import { Flex, Title, SimpleGrid } from '@mantine/core';
import CardComponents from "../../components/Card/CardComponents";
export default function Trash() {
    return (
        <>
        <Flex direction="column" gap="xl">
        <Flex justify='space-between'>
        <Title order={1}>Trash</Title>
        <Delete />
        </Flex>
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
            <CardComponents Question="What is the capital of India?" Answer="New Delhi"/>
            </Flex>
            
        </>
    )
 }