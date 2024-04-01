import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  IconSquare,
  IconChartBar,
  IconSettings,
  IconSettingsFilled,
} from "@tabler/icons-react";
import AppLayout from "../../components/Layout/AppLayout";
import appStrings from "../../utils/strings";

export default function ProjectPageLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];

  const navbarItems = [
    {
      label: appStrings.language.position.title,
      icon: <IconSquare size="1rem" />,
      activeIcon: <IconSquare size="1rem" />,
      action: () => navigate(`/${projectId}`),
    },
    {
      label: appStrings.language.insight.title,
      icon: <IconChartBar size="1rem" />,
      activeIcon: <IconChartBar size="1rem" />,
      action: () => navigate(`/${projectId}/insights`),
    },
  ];

  const navbarSettings = [
    {
      label: appStrings.language.setting.title,
      icon: <IconSettings size="1rem" />,
      activeIcon: <IconSettingsFilled size="1rem" />,
      action: () => navigate(`/${projectId}/setting`),
    },
  ];

  return (
    <AppLayout navItems={navbarItems} navPostItems={navbarSettings}>
      <Outlet />
    </AppLayout>
  );
}
