
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


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
     children : [
        {path: '/',
        element: <Home></Home>
    },
    {path: '/addproduct',
    element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
    {path: '/cart',
    element: <PrivateRoute><Mycart></Mycart></PrivateRoute>
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
      loader : ()=> fetch('http://localhost:5000/brands/audi'),

    },
    {
      path: '/brands/Toyota',
      element: <Toyota></Toyota>,
      loader : ()=> fetch('http://localhost:5000/brands/toyota'),

    },
    {
      path: '/brands/Mercedes',
      element: <Mercedes></Mercedes>,
      loader : ()=> fetch('http://localhost:5000/brands/mercedes'),

    },
    {
      path: '/brands/BMW',
      element: <BMW></BMW>,
      loader : ()=> fetch('http://localhost:5000/brands/bmw'),

    },
    {
      path: '/brands/Ford',
      element: <Ford></Ford>,
      loader : ()=> fetch('http://localhost:5000/brands/ford'),

    },
    {
      path: '/brands/Honda',
      element: <Honda></Honda>,
      loader : ()=> fetch('http://localhost:5000/brands/honda'),

    },


  
     ]
    },
  ]);

export default router;