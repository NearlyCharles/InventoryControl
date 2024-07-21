import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss'
import Nav from './components/Nav/Nav.tsx';
import HomeView from './views/Home/HomeView.tsx';
import ProcedureView from './views/Procedure/ProcedureView.tsx';
import CheckoutView from './views/Checkout/CheckoutView.tsx';
import InventoryView from './views/Inventory/InventoryView.tsx';
import CustomerView from './views/Customer/CustomerView.tsx';

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
        path: '/Procedure',
        element: <ProcedureView/>,
      },
      {
        path: '/Checkout',
        element: <CheckoutView />,
      },
      {
        path: '/Inventory',
        element: <InventoryView/>,
      },
      {
        path: '/Customer',
        element: <CustomerView/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
