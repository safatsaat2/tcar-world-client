import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Authprovider from './Providers/Authprovider';
import Blogs from './pages/Blogs/Blogs';
import AllToys from './pages/AllToys/AllToys';
import AddAToy from './pages/AddAToy/AddAToy';
import PrivateRoutes from './pages/PrivateRoutes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: 'addatoy',
        element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
