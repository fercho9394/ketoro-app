import React                     from 'react';
import loadable                  from '@loadable/component';

/* Components */
const Home                          = loadable(() => import('../Components/Home'));
const Companies                     = loadable(() => import('../Components/Companies'));

const AppRoutes = [
  {
    path:    "/",
    element: <Home />,
    type: "public",
  },
  {
    path:    "/ketoro/companies",
    element: <Companies />,
    type: "public",
  }
];
export default AppRoutes;