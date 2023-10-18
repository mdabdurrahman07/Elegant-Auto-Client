import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import router from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>

)
