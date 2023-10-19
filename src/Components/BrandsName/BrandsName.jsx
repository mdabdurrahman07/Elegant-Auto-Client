import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const BrandsName = () => {
   const [cars , setcars ] = useState([])
   useEffect(()=>{
    fetch('/brand.json')
    .then(res=> res.json())
    .then(data => setcars(data))
   },[])
    
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-5xl font-bold text-center my-8'>Our Car Brands</h1>
                <div  className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {cars.map(car => <Link to={`/brands/${car.name}`} key={car.id} >
                        <div data-aos="fade-up" className="card bg-base-100 drop-shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{car.name}</h2>
 
  </div>
  <figure><img className='w-52 h-52' src={car.img} alt="Shoes" /></figure>
</div></Link>)}
                </div>
        </div>
    );
};

export default BrandsName;