import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ItemListScreen } from './screens/ItemList';

const router = createBrowserRouter([
  {
    path: '/items',
    element: <ItemListScreen />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
