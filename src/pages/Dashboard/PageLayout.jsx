import { Outlet, useNavigate } from "react-router-dom";
import AppLayout from "../../components/Layout/AppLayout";
import {
  IconHome,
  IconHomeFilled,
  IconPerspective,
  IconShare,
  IconTrash,
  IconTrashFilled,
  IconSettings,
  IconSettingsFilled,
} from "@tabler/icons-react";
import appStrings from "../../utils/strings";
import useGlobalState from "../../context/global";
import { useEffect } from "react";
import { getCurrentUserControl } from "../../controllers/auth";

export default function DashboardPageLayout() {
  const navigate = useNavigate();
  const setUser = useGlobalState((state) => state.setUser);

  const navbarItems = [
    {
      label: appStrings.language.home.title,
      icon: <IconHome size="1rem" />,
      activeIcon: <IconHomeFilled size="1rem" />,
      action: () => navigate("/dashboard"),
    },
    {
      label: appStrings.language.yourProject.title,
      icon: <IconPerspective size="1rem" />,
      activeIcon: <IconPerspective size="1rem" />,
      action: () => navigate("/dashboard/your-project"),
    },
    {
      label: appStrings.language.sharedProjects.title,
      icon: <IconShare size="1rem" />,
      activeIcon: <IconShare size="1rem" />,
      action: () => navigate("/dashboard/shared-project"),
    },
    {
      label: appStrings.language.trash.title,
      icon: <IconTrash size="1rem" />,
      activeIcon: <IconTrashFilled size="1rem" />,
      action: () => navigate("/dashboard/deleted-project"),
    },
  ];

  const navbarSettings = [
    {
      label: appStrings.language.setting.title,
      icon: <IconSettings size="1rem" />,
      activeIcon: <IconSettingsFilled size="1rem" />,
      action: () => navigate("/dashboard/setting"),
    },
  ];

  useEffect(() => {
    getCurrentUserControl({
      onFail: () => navigate("/login"),
      onSuccess: (user) => setUser(user)
    })
  }, [navigate, setUser]);

  return (
    <AppLayout navItems={navbarItems} navPostItems={navbarSettings}>
      <Outlet />
    </AppLayout>
  );
}
