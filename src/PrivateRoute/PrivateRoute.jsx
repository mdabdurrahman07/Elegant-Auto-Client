/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { Hourglass } from  'react-loader-spinner'
import { Navigate,  useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {loader , user } = useContext(AuthContext)
    if(loader){
     return   <Hourglass
  visible={true}
  height="100vh"
  width="100%"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
/>
    }
    if(user){
      return  children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;