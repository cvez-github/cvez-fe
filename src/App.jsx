import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useRoutes } from "react-router-dom";
import appRoutes from "./routes/routes";
import useGlobalState from "./context/global";
import customTheme from "./utils/theme";

export default function App() {
  const theme = useGlobalState((state) => state.theme);

  return (
    <MantineProvider theme={customTheme} defaultColorScheme={theme}>
      <Notifications />
      {useRoutes(appRoutes)}
    </MantineProvider>
  );
}
