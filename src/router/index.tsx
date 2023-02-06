import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Proeduc from '../pages/proeduc/Proeduc';


const router = createBrowserRouter([
    {
        path: '/',
        element: < App />,
    },
    {
        path: '/proeduc',
        element: < Proeduc />,
    },
]);

export default router;