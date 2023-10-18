/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import loginIMG from '../../../public/svg/undraw_mobile_content_xvgr.png'
import googleicon from '../../../public/icons/google-logo-9808.png'
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [success , Setsuccess] = useState(null)
  const [error , Seterror] = useState(null)
        const  {Login , googlelogin} = useContext(AuthContext)
  const handleloginuser = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email , password)
   Setsuccess(null)
   Seterror(null)
    // login with firebase
      Login(email , password)
      .then((userCredential) => {
       
        const LoginUser = userCredential.user;
        console.log(LoginUser)
        Setsuccess('Login Successful')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode , errorMessage)
        Seterror(errorCode)
      });
   // navigate
   navigate(location?.state ? location?.state : '/')
      

  }
  const handleGoogle = () =>{
    googlelogin()
  .then(result => console.log(result.user))
  .catch(error =>{console.log(error.message)})
}

    return (
       <>
       <div>
       <Toaster position="top-center"  reverseOrder={false}/>
           {error && toast.error(error)}

           
           {success && toast.success(success)}
       <div className="hero  bg-white">
  <div className="hero-content flex-col lg:flex-row">
        <img src={loginIMG} alt="" />
    <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-lg bg-base-100">
      <form onSubmit={handleloginuser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-xl">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="text-xl-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="flex justify-center mt-6">
          <button type='submit' className="bg-black text-white text-xl font-medium rounded-full px-6 py-2">Login</button>
        </div>

        <div onClick={handleGoogle} className='border-2 border-black mt-3  flex justify-center p-2 rounded-xl'>
          <span className='flex justify-center items-center gap-5'><img className='w-10' src={googleicon} alt="" />
          <p className='font-medium text-xl'>Login With Google</p></span>
        </div>
        <div className='ml-5 mt-3'><p className='text-xl font-medium '>Don't Have an Account ? <Link to="/registration" className='underline ml-2'>Register</Link></p></div>
      </form>
    </div>
  </div>
</div>
       </div>
       
       </>
    );
};

export default Login;