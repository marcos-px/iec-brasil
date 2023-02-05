import { createBrowserRouter } from "react-router-dom";
import Home from "../App";
import { Header } from "../components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/header",
    element: <Header />,
  },
]);

export default router;
