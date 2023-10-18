import React, { useContext } from 'react';
import RegistrationImg from '../../../public/svg/undraw_Sign_up_n6im.png'
import googleicon from '../../../public/icons/google-logo-9808.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from "firebase/auth";

const Registration = () => {
      const {createUser} = useContext(AuthContext)
  const handleregister = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const name = form.get('name')
    const photo = form.get('url')
    const password = form.get('password')

    const registerUser = {email , name , photo , password}
    console.log(registerUser)
    form.reset()
    // creating user 
    createUser(email , password)
    .then(result => {
      console.log(result.user)

      // updateUser 
         updateProfile(result.user, {
          displayName : name,
          photoURL : photo
       })
       .then(result => console.log(result))
       .catch(error => console.log(error))
        console.log(result.user);
        return
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode , errorMessage)
      return
    });
    
  }
    return (
        <div className='mb-20'>
               <div>
       <div className="hero  bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={RegistrationImg} alt="" />
    <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-lg bg-base-100">
      <form onSubmit={handleregister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="text-xl">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl">Photo Url</span>
          </label>
          <input type="url" placeholder="Photo Url" name='url' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
         
        </div>
        <div className="flex justify-center mt-6">
          <button type='submit' className="bg-black text-white text-xl font-medium rounded-full px-6 py-2">Register</button>
        </div>

        <div className='border-2 border-black mt-3  flex justify-center p-2 rounded-xl'>
          <span className='flex justify-center items-center gap-5'><img className='w-10' src={googleicon} alt="" />
          <p className='font-medium text-xl'>Login With Google</p></span>
        </div>
        <div className='ml-5 mt-3'><p className='text-xl font-medium '>Already Have an Account ? <Link to="/login" className='underline ml-2'>Login</Link></p></div>
      </form>
    </div>
  </div>
</div>
       </div>
        </div>
    );
};

export default Registration;