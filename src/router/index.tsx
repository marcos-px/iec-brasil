import { createBrowserRouter } from "react-router-dom";
import Home from '../App';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  export default router;