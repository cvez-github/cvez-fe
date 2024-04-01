import { useState } from "react";
import { Center, Flex, Title } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import SettingLayout from "../../components/Layout/SettingLayout";
import SelectSettingCard from "../../components/SettingCard/Select";
import useGlobalState from "../../context/global";
import DropdownSettingCard from "../../components/SettingCard/Dropdown";

export default function SettingPage() {
  const theme = useGlobalState((state) => state.theme);
  const language = useGlobalState((state) => state.language);
  const [currentTheme, setTheme] = useState(theme);
  const [currentLanguage, setLanguage] = useState(language);

  function handleSetTheme(value) {
    localStorage.setItem("theme", value);
    setTheme(value);
  }

  function handleSetLanguage(value) {
    localStorage.setItem("language", value);
    setLanguage(value);
  }

  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={2}>{appStrings.language.setting.heading}</Title>
      </HeadingLayout>
      <SettingLayout title={appStrings.language.setting.general.title}>
        <SelectSettingCard
          title={appStrings.language.setting.general.theme}
          warning={
            currentTheme !== theme
              ? appStrings.language.setting.requiredRestart
              : null
          }
          options={[
            {
              value: "light",
              label: (
                <Center>
                  <IconSun size="1rem" />
                </Center>
              ),
            },
            {
              value: "dark",
              label: (
                <Center>
                  <IconMoon size="1rem" />
                </Center>
              ),
            },
          ]}
          value={currentTheme}
          onChange={(value) => handleSetTheme(value)}
        />
        <DropdownSettingCard
          title={appStrings.language.setting.general.language}
          warning={
            currentLanguage !== language
              ? appStrings.language.setting.requiredRestart
              : null
          }
          options={[
            { value: "en", label: "English" },
            { value: "vi", label: "Tiếng Việt" },
          ]}
          value={currentLanguage}
          onChange={(value) => handleSetLanguage(value)}
        />
      </SettingLayout>
    </Flex>
  );
}
