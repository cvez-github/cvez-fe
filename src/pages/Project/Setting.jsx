import { Flex, Title } from "@mantine/core";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";

export default function ProjectSettingPage() {
  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={2}>{appStrings.language.setting.heading}</Title>
      </HeadingLayout>
    </Flex>
  );
}
