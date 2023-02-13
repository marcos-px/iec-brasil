import { createBrowserRouter } from 'react-router-dom';
import Proeduc from '../pages/proeduc/Proeduc';
import AppLogin from '../pages/LoginPage';
import Home from '../pages/Home/Home';


const router = createBrowserRouter([
    {
        path: '/',
        element: < Home />,
    },
    {
        path: '/proeduc',
        element: < Proeduc />,
    },
    {
        path: "/login",
        element: <AppLogin />,
    },
]);

export default router;
