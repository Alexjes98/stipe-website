import Home from "../pages/home";
import About from "../pages/about";

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
        path: "/contact",
        element: <div></div>,
    },
    {
        path: "/termsAndConditions",
        element: <div></div>,
    }
];

export default appRoutes;