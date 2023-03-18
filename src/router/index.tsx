import { createBrowserRouter } from "react-router-dom";
import Proeduc from "../pages/proeduc/Proeduc";
import AppLogin from "../pages/LoginPage";
import Home from "../pages/Home/Home";
import Contact from "../pages/contact";
import TermosDeUso from "../pages/terms/termosDeUso";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proeduc",
    element: <Proeduc color={""} />,
  },
  {
    path: "/login",
    element: <AppLogin />,
  },
  {
    path: "/contato",
    element: <Contact />,
  },
  {
    path: "/termosdeuso",
    element: <TermosDeUso />,
  },

]);

export default router;
