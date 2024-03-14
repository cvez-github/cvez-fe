import MatcherPage from "../pages/Matcher";
import CVPage from "../pages/CVs";
import NotFoundPage from "../pages/NotFound";
import QuestionsPage from "../pages/Questions";
import CVDetailPage from "../pages/CVDetail";

export const routes = [
  {
    path: "/",
    element: <MatcherPage />,
  },
  {
    path: "/cv",
    element: <CVPage />,
  },
  {
    path: "/cv/:id",
    element: <CVDetailPage />, // TODO: Add CV Detail page
  },
  {
    path: "/jd/:id",
    element: <div>Job Description Page</div>, // TODO: Add Job Description Detail page
  },
  {
    path: "/questions",
    element: <QuestionsPage />,
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
