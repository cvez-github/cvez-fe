import Delete from "../../components/Button/Delete";
import CardComponent from "../../components/Trash/Card";
import { Flex, Title, SimpleGrid } from '@mantine/core';
import QuesAnsP from "../../components/Paper/Paper";
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
            <QuesAnsP Question="This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks. If you find that the number of required elements for your design are making the dialog excessively large, then try a different design solution. " Answer="New Delhi"/>
            </Flex>
            
        </>
    )
 }