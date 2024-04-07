import Home from "../pages/home";
import History from "../pages/history";
import OurTeam from "../pages/ourTeam";
import Study from "../pages/study";
import About from "../pages/about";
import PrivacyPolicy from "../pages/privacyPolicy";

const appRoutes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/history",
        element: <History/>,
    },
    {
        path: "/ourTeam",
        element: <OurTeam/>,
    },
    {
        path: "/study",
        element: <Study/>,
    },
    {
        path: "/contact",
        element: <div></div>,
    },
    {
        path: "/privacyPolicy",
        element: <PrivacyPolicy/>,
    }
];

export default appRoutes;