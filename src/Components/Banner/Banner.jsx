import React, { useEffect } from 'react';
import banner from '../../../public/logo/Welcome to Elegant Auto.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className='max-w-6xl mx-auto mt-20 md:mt-11'>
            <img data-aos="zoom-in" src={banner} alt="" />
        </div>
    );
};

export default Banner;