import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  IconSquare,
  IconChartBar,
  IconSettings,
  IconSettingsFilled,
} from "@tabler/icons-react";
import AppLayout from "../../components/Layout/AppLayout";
import appStrings from "../../utils/strings";
import { useEffect } from "react";
import { getYourProjectsControl } from "../../controllers/dashboard";
import useProjectsState from "../../context/project";
import { getCurrentUserControl } from "../../controllers/auth";
import useGlobalState from "../../context/global";

export default function ProjectPageLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const setProjects = useProjectsState((state) => state.setProjects);
  const setUser = useGlobalState((state) => state.setUser);

  const navbarItems = [
    {
      label: appStrings.language.position.title,
      icon: <IconSquare size="1rem" />,
      activeIcon: <IconSquare size="1rem" />,
      to: `/${projectId}`,
    },
    {
      label: appStrings.language.insight.title,
      icon: <IconChartBar size="1rem" />,
      activeIcon: <IconChartBar size="1rem" />,
      to: `/${projectId}/insights`,
    },
  ];

  const navbarSettings = [
    {
      label: appStrings.language.setting.title,
      icon: <IconSettings size="1rem" />,
      activeIcon: <IconSettingsFilled size="1rem" />,
      to: `/${projectId}/setting`,
    },
  ];

  useEffect(() => {
    // Fetch user data
    getCurrentUserControl({
      onFail: () => navigate("/login"),
      onSuccess: (user) => {
        setUser(user);
        // Fetch projects data
        getYourProjectsControl().then((data) => setProjects(data));
      },
    });
  }, [setProjects]);

  return (
    <AppLayout navItems={navbarItems} navPostItems={navbarSettings}>
      <Outlet />
    </AppLayout>
  );
}
