import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Proeduc from '../pages/proeduc';
import AppLogin from '../pages/LoginPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: < App />,
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