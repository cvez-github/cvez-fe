import DashboardPageLayout from "../pages/Dashboard/Layout";
import RedirectPage from "../pages/Redirect";

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
        element: <div>Home Page</div>,
      },
      {
        path: "/dashboard/your-project",
        element: <div>Your Project Page</div>,
      },
      {
        path: "/dashboard/shared-project",
        element: <div>Shared Project Page</div>,
      },
      {
        path: "/dashboard/deleted-project",
        element: <div>Deleted Project Page</div>,
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
