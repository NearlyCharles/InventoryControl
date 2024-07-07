import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss'
import Nav from './components/Nav/Nav.tsx';
import HomeView from './views/Home/HomeView.tsx';
import ProcedureView from './views/Procedure/ProcedureView.tsx';
import CheckoutView from './views/Checkout/CheckoutView.tsx';
import InventoryView from './views/Inventory/InventoryView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <HomeView />,
      },
      {
        path: '/procedure',
        element: <ProcedureView/>,
      },
      {
        path: '/checkout',
        element: <CheckoutView />,
      },
      {
        path: '/inventory',
        element: <InventoryView/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
