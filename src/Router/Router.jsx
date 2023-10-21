
import React from 'react';

import {createBrowserRouter,} from "react-router-dom";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Mycart from '../Pages/Mycart/Mycart';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import BrandsName from '../Components/BrandsName/BrandsName';
import Audi from '../Audi/Audi';
import Toyota from '../Toyota/Toyota';
import Mercedes from '../Mercedes/Mercedes';
import BMW from '../BMW/BMW';
import Ford from '../Ford/Ford';
import Honda from '../Honda/Honda';
import CarDetails from '../Components/CarDetails/CarDetails';
import ErrorPage from '../ErrorPage/ErrorPage';
import UpdateInfo from '../Pages/UpdateInfo/UpdateInfo';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
     children : [
        {path: '/',
        element: <Home></Home>
    },
    {path: '/addproduct',
    element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
    {path: '/cart',
    element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
    loader : () => fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/cartData')

    },
    {path: '/login',
    element: <Login></Login>
    },
    {
      path: '/registration',
      element: <Registration></Registration>
    },
    {
      path: '/brands/:name',
      element: <BrandsName></BrandsName>,
     
    },
    {
      path: '/brands/Audi',
      element: <Audi></Audi>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands/audi'),

    },
    {
      path: '/brands/Toyota',
      element: <Toyota></Toyota>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands/toyota'),

    },
    {
      path: '/brands/Mercedes',
      element: <Mercedes></Mercedes>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands/mercedes'),

    },
    {
      path: '/brands/BMW',
      element: <BMW></BMW>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands/bmw'),

    },
    {
      path: '/brands/Ford',
      element: <Ford></Ford>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands/ford'),

    },
    {
      path: '/brands/Honda',
      element: <Honda></Honda>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands/honda'),

    },
    {
      path: '/CarDetails/:id',
      element : <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands')
      
    },
    {
      path: '/updatedInfo/:id',
      element : <PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>,
      loader : ()=> fetch('https://local-car-server-ofk75cphr-md-abdur-rahmans-projects-58537ada.vercel.app/brands')

    }
    


  
     ]
    },
  ]);

export default router;