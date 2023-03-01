import { createBrowserRouter } from 'react-router-dom';
import Proeduc from '../pages/proeduc/Proeduc';
import AppLogin from '../pages/LoginPage';
import Home from '../pages/Home/Home';
import Contact from '../pages/contact';


const router = createBrowserRouter([
    {
        path: '/',
        element: < Home />,
    },
    {
        path: '/proeduc',
        element: < Proeduc color={''} />,
    },
    {
        path: "/login",
        element: <AppLogin />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
]);

export default router;
