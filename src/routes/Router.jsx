import Root from '../pages/Root';
import Coin from '../pages/Coin';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import { createBrowserRouter } from 'react-router-dom';

const Router = createBrowserRouter([
    { path: '/', element: <Root />, children: [
        { path: '/', element: <Home /> },
        { path: '/coin/:id', element: <Coin /> },
        { path: '/favorites', element: <Favorites /> },
    ]},
]);

export default Router;