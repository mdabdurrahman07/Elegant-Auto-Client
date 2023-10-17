import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo/Screenshot 2023-10-17 232850.png'

const Header = () => {
    const links = <>
    
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>
  <li className='text-2xl font-medium'><a>Home</a></li>
</NavLink>
    <NavLink
  to="/addproduct"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>
  <li className='text-2xl font-medium'><a>Add  Product</a></li>
</NavLink>
    <NavLink
  to="/cart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>
  <li className='text-2xl font-medium'><a>My Cart</a></li>
</NavLink>


    </>
    return (
        <div className='p-3'>
                <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <div>
        <img className='w-52' src={logo} alt="" />

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button className=" font-medium text-lg md:text-2xl text-white bg-slate-950 px-3 md:px-6 py-1 md:py-2  rounded-lg ">Login</button>
  </div>
</div>
        </div>
    );
};

export default Header;