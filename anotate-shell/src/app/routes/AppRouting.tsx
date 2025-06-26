// src/app/routes/AppRouting.tsx
import React, { FC, lazy, memo, Suspense } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import HomePage from '../pages/layout';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { Login } from '../pages/Login';  // ← your new login page

// lazy-loaded feature modules
const AnotateImagecreation = lazy(() => import('anotate_imagecreation/Module'));
const AnotateImagesimilaritysearch = lazy(() => import('anotate_imagesimilaritysearch/Module'));
const AnotateImagesearch         = lazy(() => import('anotate_imagesearch/Module'));
const AnotateImagedetection      = lazy(() => import('anotate_imagedetection/Module'));

const NotFound: FC = () => <p>Page not found</p>;

// Protects any subtree behind authentication
const RequireAuth: FC<{ children: React.ReactNode; redirectTo: string }> = ({
  children,
  redirectTo,
}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated
    ? <>{children}</>
    : <Navigate to={redirectTo} replace />;
};

const routes = [
  // Public sign-in page
  { path: '/signin', element: <Login /> },

  // Everything else must be signed in
  {
    path: '/',
    element: (
      <RequireAuth redirectTo="/signin">
        <HomePage />
      </RequireAuth>
    ),
    children: [
      { path: '',           element: <AnalyticsDashboard /> },
      { path: 'search',     element: <AnotateImagesearch /> },
      { path: 'similarity', element: <AnotateImagesimilaritysearch /> },
      { path: 'generate',   element: <AnotateImagecreation /> },
      { path: 'detect',     element: <AnotateImagedetection /> },
    ],
  },

  // 404
  { path: '*', element: <NotFound /> },
];

const router = createBrowserRouter(routes, { basename: '/' });

const Routing: FC = () => (
  <Suspense fallback={<p>Loading...</p> /* or your <AppLoaderControl /> */}>
    <RouterProvider router={router} />
  </Suspense>
);

export default memo(Routing);
