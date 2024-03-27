import DashboardPageLayout from "../pages/Dashboard/Layout";
import RedirectPage from "../pages/Redirect";
import Home from "../pages/Dashboard/Home";
import Projects from "../pages/Dashboard/Projects";
import Trash from "../pages/Dashboard/Trash";
const appRoutes = [
  {
    path: "/",
    element: <div>Landing Page</div>,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/your-project",
        element: <Projects />,
      },
      {
        path: "/dashboard/shared-project",
        element: <div>Shared Project Page</div>,
      },
      {
        path: "/dashboard/deleted-project",
        element: <Trash/>,
      },
      {
        path: "/dashboard/setting",
        element: <div>Setting</div>,
      },
      {
        path: "/dashboard/*",
        element: <RedirectPage destination="/dashboard" />,
      },
    ],
  },
  {
    path: "/:project-id",
  },
  {
    path: "/:project-id/:position-id",
  },
  {
    path: "/:project-id/insights",
  },
  {
    path: "/:project-id/:position-id/cv",
  },
  {
    path: "/:project-id/:position-id/jd",
  },
  {
    path: "/:project-id/:position-id/questions",
  },
  {
    path: "/:project-id/:position-id/cv/:cv-id",
  },
  {
    path: "/:project-id/:position-id/questions/:question-id",
  },
  {
    path: "*",
    element: <div>404 Page</div>,
  },
];

export default appRoutes;
