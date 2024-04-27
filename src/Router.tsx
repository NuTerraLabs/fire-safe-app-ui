import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

import LoginPage from './pages/auth/Login.page';
import LiveStreamPage from './pages/Streems/LiveStreame.page';
import Dashboard from './pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/w',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/streams',
    element: <LiveStreamPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
