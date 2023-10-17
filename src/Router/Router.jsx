
import React from 'react';

import {createBrowserRouter,} from "react-router-dom";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Mycart from '../Pages/Mycart/Mycart';


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
  
     ]
    },
  ]);

export default router;