import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import { useAuth } from "./provider/authProvider";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import PerfTracking from './pages/PerfTracking';
import RouteOptimizer from './pages/RouteOptimizer';
import Signup from './pages/Signup';

document.addEventListener('DOMContentLoaded', () => {
    const rootDiv = document.getElementById('root');

    const root = ReactDOM.createRoot(rootDiv);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );

    const Routes = () => {
      const { token } = useAuth();

      //Route configurations

      //array of routes for every user
      const publicRoutes = [
        {
          path: "/",
          element: <LandingPage />
        }
      ];

      //array of routes for authenticated users
      const authenticatedRoutes = [
        {
          path: "/",
          element: <ProtectedRoute />,

          children: [
            {
              path: "/home",
              element: <HomePage />
            },

            {
              path: "/route-optimizer",
              element: <RouteOptimizer />
            },

            {
              path: "/performance-tracking",
              element: <PerfTracking />
            },
          ],
        },
      ];

      //array of routes for those not authenticated
      const NotAuthenticatedRoutes = [
        {
          path: "/",
          element: <LandingPage />
        },

        {
          path: "/signup",
          element: <Signup />
        }
      ];
    };
});

export default Routes;
