import { Flex, Title } from "@mantine/core";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import Uploadcv from "../../components/Upload/Uploadcv";
import Addalert from "../../components/Alert/Addalert";
import Tables from "../../components/Table/Table";
export default function CVPage() {
  return (
    <Flex direction="column" gap="md" w="60%">
      <HeadingLayout>
        <Title order={1}>CV Data</Title>
      </HeadingLayout>
      <Uploadcv />
      <Addalert title="https://www.example.com/cv" />
      <Tables />
    </Flex>
  );
}
