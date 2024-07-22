import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HomePage, Hotels, About } from '../pages';

const routerConfig = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      {
        path: 'hotels',
        children: [
          { index: true, element: <Hotels /> },
          { path: ':id', element: <p>Id</p> },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
