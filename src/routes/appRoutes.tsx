import Home from "../pages/home";
import History from "../pages/history";
import OurTeam from "../pages/ourTeam";
import Study from "../pages/study";
import About from "../pages/about";
import PrivacyPolicy from "../pages/privacyPolicy";
import DeleteData from "../pages/deleteData";
import TermsAndConditions from "../pages/termsAndConditions";
import ResetPassword from "../pages/resetPastword";
import DownloadExcelTemplate from "../pages/downloadExcelTemplate";

const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/ourTeam",
    element: <OurTeam />,
  },
  {
    path: "/study",
    element: <Study />,
  },
  {
    path: "/contact",
    element: <div></div>,
  },
  {
    path: "/deleteData",
    element: <DeleteData />,
  },
  {
    path: "/privacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/termsAndConditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/downloadExcelTemplate",
    element: <DownloadExcelTemplate />,
  },
];

export default appRoutes;
