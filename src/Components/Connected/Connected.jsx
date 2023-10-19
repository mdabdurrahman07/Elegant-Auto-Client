import React from 'react';

const Connected = () => {
   
    return (
        <div className='max-w-6xl mx-auto my-7'>
            <h1 className='text-5xl font-bold text-center mt-5 mb-8'>Stay Connected</h1>
            <div className="hero  bg-white shadow-xl p-10 border border-black-2">
  <div className="hero-content gap-5 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Submit Now</h1>
      <p className="py-6 text-lg">To get interesting offer , or free gifts or free rides then please submit this is form with your email, Thanks </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-xl">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
       
        
        <div className="form-control mt-6">
          <button type='submit'  className="text-xl font-bold px-5 py-3 bg-black text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Connected;