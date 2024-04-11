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
import { useEffect } from "react";
import { getCurrentUserControl } from "../../controllers/auth";
import { getPositionControl } from "../../controllers/positions";
import usePositionsState from "../../context/position";
import useGlobalState from "../../context/global";

export default function PositionPageLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const setUser = useGlobalState((state) => state.setUser);
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];
  const setPosition = usePositionsState((state) => state.setPosition);

  const navbarNavigation = [
    {
      label: appStrings.language.btn.back,
      icon: <IconArrowLeft size="1rem" />,
      to: `/${projectId}`,
    },
  ];

  const navbarItems = [
    {
      label: appStrings.language.positionDetail.title,
      icon: <IconHome size="1rem" />,
      activeIcon: <IconHomeFilled size="1rem" />,
      to: `/${projectId}/${positionId}`,
    },
    {
      label: appStrings.language.cv.title,
      icon: <IconFileCv size="1rem" />,
      to: `/${projectId}/${positionId}/cv`,
    },
    {
      label: appStrings.language.jd.title,
      icon: <IconFileDescription size="1rem" />,
      to: `/${projectId}/${positionId}/jd`,
    },
    {
      label: appStrings.language.questions.title,
      icon: <IconQuestionMark size="1rem" />,
      to: `/${projectId}/${positionId}/questions`,
    },
  ];

  useEffect(() => {
    getCurrentUserControl({
      onFail: () => navigate("/login"),
      onSuccess: (user) => {
        setUser(user);
        getPositionControl(projectId, positionId).then((data) =>
          setPosition(data)
        );
      },
    });
  }, []);

  return (
    <AppLayout navPreItems={navbarNavigation} navItems={navbarItems}>
      <Outlet />
    </AppLayout>
  );
}
