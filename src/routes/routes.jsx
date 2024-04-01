import DashboardPageLayout from "../pages/Dashboard/PageLayout";
import HomePage from "../pages/Dashboard/Home";
import YourProjectPage from "../pages/Dashboard/YourProject";
import SharedProjectPage from "../pages/Dashboard/SharedProject";
import TrashPage from "../pages/Dashboard/Trash";
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
        element: <HomePage />,
      },
      {
        path: "/dashboard/your-project",
        element: <YourProjectPage />,
      },
      {
        path: "/dashboard/shared-project",
        element: <SharedProjectPage />,
      },
      {
        path: "/dashboard/deleted-project",
        element: <TrashPage />,
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
