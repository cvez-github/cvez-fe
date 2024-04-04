import { Flex, Title, Paper, Spoiler, Text, Container } from "@mantine/core";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import Uploadcv from "../../components/Upload/Uploadcv";
import { useLocation } from 'react-router-dom';


export default function UploadId() {
    const location = useLocation();
  const positionId = location.pathname.split("/")[2];

  return (
    <Container size="sm" >
    <Flex direction="column" gap="md" >
      <HeadingLayout>
      <Title order={1}>
        {positionId}
      </Title>
      </HeadingLayout>
      <Text>Description</Text>
      <Title order={4}>JD</Title>
      <Paper shadow="xs" p="xl">
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
          Buymed is Vietnam’s and Southeast Asia’s top healthtech company. We improve healthcare quality and access for practitioners, patients, and all other stakeholders (pharmaceutical producers, distributors, logistics providers, and pharmacists) in between by using transformational technology. Job Descriptions: As an AI engineer, you will join the AI engineering team at the most innovative healthcare startup in Vietnam and SEA to build and develop AI services to help the pharmaceutical market improve its performance and help people take care of their health. Daily operation contains (but not limited to): - Work with a business owner and AI engineering team to drive the development of AI servicesResearch appropriate algorithms and tools of broad domains of AI, such as computer vision, NLP, ML/DL, and generative AIDo MVP and implement AI services - Do integration with other products - Monitor, analyze, fix bugs, and make improvements to AI services - Support/receive feedback from usersBrainstorm and give solutions to improve business & operation performance - Help/guide other teammates to complete their tasks if possible Open for Level 2-3: - AI Engineer Requirements Must have: - MS/BS/BA in Computer Science, Computer Engineering, Mathematics, or related majors.
          - Experience as an AI Engineer (any domain) - Level 2: Minimum 1 year - Level 3: Minimum 2 years - Very strong background in data structure and algorithm - Deep knowledge of AI and have understanding of how AI works - Passionate about data, ML/DL, and its applications - Experienced with one of the following languages: Go, Java, Python - (From level 2) Experience with ML/DL frameworks and libraries such as Tensorflow, Pytorch, MXNet, Pandas, PySpark, … Nice to have: - Large-scale AI backend architectureExperienced with Cloud Platform (AWS, Azure, GCP) - Experienced with CI/CD - Experienced with Docker/Kubernetes - Experienced with over 1M daily transactions system - Familiar with Agile/Scrum What we offer - Performance & salary review yearly - Paid social insurance based on full salary - PVI Insurance - Medical Checkup - 15 days of annual leave - Parking allowance"
        </Spoiler>
      </Paper>
      <Title order={4}>UploadCV</Title>
      <Uploadcv />
    </Flex>
    </Container>
  );
}
