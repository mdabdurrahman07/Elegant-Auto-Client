/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import loginIMG from '../../../public/svg/undraw_mobile_content_xvgr.png'
import googleicon from '../../../public/icons/google-logo-9808.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
        const  {Login} = useContext(AuthContext)
  const handleloginuser = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email , password)

    // login with firebase
      Login(email , password)
      .then((userCredential) => {
       
        const LoginUser = userCredential.user;
        console.log(LoginUser)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode , errorMessage)
      });
      form.reset()

  }

    return (
       <>
       <div>
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

        <div className='border-2 border-black mt-3  flex justify-center p-2 rounded-xl'>
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