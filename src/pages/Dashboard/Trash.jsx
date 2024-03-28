import CardComponent from "../../components/Trash/Card";
import { Flex, Title, SimpleGrid } from '@mantine/core';
import QuesAnsP from "../../components/Paper/QuesaAns";
import QuesCard from "../../components/Paper/QuestionCard";
import Technical from "../../components/Paper/Paper";
import AddButton from "../../components/Button/Button";
export default function Trash() {
    return (
        <>
        <Flex direction="column" gap="xl">
        <Flex justify='space-between'>
        <Title order={1}>Trash</Title>
        <AddButton v="filled"  c="red" title="Permanently delete projects"/>
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
            <QuesCard QuesCont="Question content" Answer="Answer" Levels="Level" />
            <Technical/>
            </Flex>

            
        </>
    )
 }