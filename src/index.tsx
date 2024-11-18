import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PersonalHomepage from './routes/products/PersonalHomepage';
import Layout from 'components/layout/Layout';
import TestPage from 'routes/test/TestPage';
import Tmb from 'routes/products/Tmb';

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/home/products/tmb",
    element: (
      <Layout>
        <Tmb />
      </Layout>
    ),
  },
  {
    path: "/home/products/personal-homepage",
    element: (
      <Layout>
        <PersonalHomepage />
      </Layout>
    ),
  },
  {
    path: "/home/test/test-page",
    element: (
      <Layout>
        <TestPage />
      </Layout>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
