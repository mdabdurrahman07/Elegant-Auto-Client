import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import img_one from '../../public/mercedes Slider/Screenshot 2023-10-19 233843.png'
import img_two from '../../public/mercedes Slider/benz-2.jpg'
import img_three from '../../public/mercedes Slider/benz-3.jpg'
const Mercedes = () => {
    const mercedes = useLoaderData()
    console.log(mercedes)
    return (
        <div className='my-7'>
        <h1 className='text-6xl font-bold text-center mb-8'>Welcome To Mercedes</h1>
    <Swiper
spaceBetween={60}
centeredSlides={true}
autoplay={{
delay: 2500,
disableOnInteraction: false,
}}
pagination={{
clickable: true,
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
className="mySwiper"
>
<SwiperSlide><img  src={img_one} alt="" /></SwiperSlide>
<SwiperSlide><img  src={img_two} alt="" /></SwiperSlide>
<SwiperSlide><img  src={img_three} alt="" /></SwiperSlide>


</Swiper>

    <div className='max-w-6xl mx-auto  my-5'>
    <div>
        <h1 className='text-4xl font-semibold text-center'>Our Available Cars </h1>
    </div>
  <div className='max-w-5xl mx-auto my-8'>
  <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>
        {
            mercedes.map(mercedescars => <div key={mercedescars._id} className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='h-80' src={mercedescars.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{mercedescars.brandname}</h2>
              <p className='font-medium text-lg'>{mercedescars.description}</p>
              <p className='font-medium text-xl'>Model  <span className='font-bold ml-2'>{mercedescars.name}</span></p>
              <p className='font-medium text-xl'>Type <span className='font-bold ml-2'>{mercedescars.type}</span></p>
              <p className='font-medium text-xl'>Price <span className='font-bold ml-2'>{mercedescars.price} BDT</span></p>
              <p  className='font-medium text-xl'>Rating  <span className='font-bold ml-2 mr-2'>{mercedescars.rating}</span> Out of 10</p>
              <div className="flex justify-center items-center gap-3 p-3">
              <Link to={`/CarDetails/${mercedescars._id}`}>  <button className="px-5 py-2 bg-black text-white font-bold text-xl rounded-xl">Details </button></Link>
             <Link to={`/updatedInfo/${mercedescars._id}`}> <button className="px-5 py-2 bg-black text-white font-bold text-xl rounded-xl">Update </button></Link>
              </div>
            </div>
          </div>)
        }
    </div>
  </div>
    </div>
</div>
    );
};

export default Mercedes;
