import { createBrowserRouter } from "react-router-dom";
import Proeduc from "../pages/proeduc";
import AppLogin from "../pages/LoginPage";
import FormContact from "../components/Contact";

const router = createBrowserRouter([
  // {
  //     path: '/',
  //     element: < App />,
  // },
  {
    path: "/proeduc",
    element: <Proeduc />,
  },
  {
    path: "/login",
    element: <AppLogin />,
  },
  {
    path: "/contact",
    element: <FormContact />,
  },
]);

export default router;
