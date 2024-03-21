import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';

const Body = () => {

  const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
  ]); 
  return (
    <div>
        <RouterProvider router={appRoutes}>
            <Outlet />
        </RouterProvider>
    </div>
  )
}

export default Body;