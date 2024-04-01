import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  IconArrowLeft,
  IconFileCv,
  IconFileDescription,
  IconQuestionMark,
  IconHome,
  IconHomeFilled,
} from "@tabler/icons-react";
import AppLayout from "../../components/Layout/AppLayout";
import appStrings from "../../utils/strings";

export default function PositionPageLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];

  const navbarNavigation = [
    {
      label: appStrings.language.btn.return,
      icon: <IconArrowLeft size="1rem" />,
      action: () => navigate(`/${projectId}`),
    },
  ];

  const navbarItems = [
    {
      label: appStrings.language.positionGeneral.title,
      icon: <IconHome size="1rem" />,
      activeIcon: <IconHomeFilled size="1rem" />,
      action: () => navigate(`/${projectId}/${positionId}`),
    },
    {
      label: appStrings.language.cv.title,
      icon: <IconFileCv size="1rem" />,
      action: () => navigate(`/${projectId}/${positionId}/cv`),
    },
    {
      label: appStrings.language.jd.title,
      icon: <IconFileDescription size="1rem" />,
      action: () => navigate(`/${projectId}/${positionId}/jd`),
    },
    {
      label: appStrings.language.questions.title,
      icon: <IconQuestionMark size="1rem" />,
      action: () => navigate(`/${projectId}/${positionId}/questions`),
    },
  ];

  return (
    <AppLayout navPreItems={navbarNavigation} navItems={navbarItems}>
      <Outlet />
    </AppLayout>
  );
}
