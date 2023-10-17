
import React from 'react';

import {createBrowserRouter,} from "react-router-dom";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Mycart from '../Pages/Mycart/Mycart';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
     children : [
        {path: '/',
        element: <Home></Home>
    },
    {path: '/addproduct',
    element: <AddProduct></AddProduct>
    },
    {path: '/cart',
    element: <Mycart></Mycart>
    },
    {path: '/login',
    element: <Login></Login>
    },
    {
      path: '/registration',
      element: <Registration></Registration>
    },

  
     ]
    },
  ]);

export default router;