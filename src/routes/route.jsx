import MatcherPage from "../pages/Matcher";
import NotFoundPage from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <MatcherPage />,
  },
  {
    path: "/cv",
    element: <div>CV Page</div>, // TODO: Add CV page
  },
  {
    path: "/cv/:id",
    element: <div>CV Page</div>, // TODO: Add CV Detail page
  },
  {
    path: "/jd/:id",
    element: <div>Job Description Page</div>, // TODO: Add Job Description Detail page
  },
  {
    path: "/questions",
    element: <div>Questions Page</div>, // TODO: Add Questions page
  },
  {
    path: "/questions/:id",
    element: <div>Questions Page</div>, // TODO: Add Questions Detail page
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
