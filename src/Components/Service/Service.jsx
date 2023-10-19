
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const Service = () => {
    const [service , Setservice] = useState([])
    useEffect(()=> {
         fetch('/service.json')   
         .then(res => res.json())
         .then(data => Setservice(data))
    }, [])
    return (
        <div className='max-w-6xl mx-auto mt-10' >
            <h1 className='text-5xl font-bold text-center mb-7'>Our Services</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 ml-5 md:ml-0'>
          {
               service.map(items => 
                <div  data-aos="fade-down" key={items.id} className="max-w-sm bg-white  rounded-lg shadow">
                  
                        <img className="rounded-t-lg h-80" src={items.img} alt="" />
                   
                    <div className="p-5">
                       
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{items.title}</h5>
                      
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{items.description}</p>
                        <div href="#" className="inline-flex text-lg items-center px-3 py-2 font-medium text-center text-white bg-black rounded-lg">
                            Read more
                            
                        </div>
                    </div>
                </div>
                )     
            }
          </div>
        </div>
    );
};

export default Service;