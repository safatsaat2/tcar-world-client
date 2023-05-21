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
import MyToys from './pages/MyToys/MyToys';
import SingleToyPage from './pages/SingleToyPage/SingleToyPage';
import SingleToyPageUpdate from './pages/SingleToyPageUpdate/SingleToyPageUpdate';
import NotFound from './pages/Not Found/NotFound';


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
        element: <AllToys></AllToys>,
        loader:() => fetch('https://tcar-world-server.vercel.app/category-data')
      },
      {
        path: 'addatoy',
        element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
      },
      {
        path:'mytoys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
        // loader: ({params}) => fetch(`https://tcar-world-server.vercel.app/category-data/${params.email}`)
      },
      {
        path:'singletoypage/:id',
        element: <PrivateRoutes><SingleToyPage></SingleToyPage></PrivateRoutes>,
        loader: ({params}) => fetch( `https://tcar-world-server.vercel.app/categoryData/${params.id}`)
      },
      {
        path:'singletoypageupdate/:id',
        element: <PrivateRoutes><SingleToyPageUpdate></SingleToyPageUpdate></PrivateRoutes>,
        loader: ({params}) => fetch( `https://tcar-world-server.vercel.app/categoryData/${params.id}`)
      }

    ]
  },
  {
    path: '*',
    element:<NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
