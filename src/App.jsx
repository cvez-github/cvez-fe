import { useRoutes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { routes } from "./routes/route";
import GeneralLayout from "./components/Layout";
import useAppState from "./hooks/appState";
import { getThemeConfig } from "./utils/utils";

export default function App() {
  const theme = useAppState((state) => state.theme);
  return (
    <ConfigProvider theme={getThemeConfig(theme)}>
      <GeneralLayout>{useRoutes(routes)}</GeneralLayout>
    </ConfigProvider>
  );
}
