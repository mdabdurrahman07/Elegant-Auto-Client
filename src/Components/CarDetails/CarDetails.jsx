import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const CarDetails = () => {
    const [Car , SetCar] = useState({})
    const {id} = useParams()
    // console.log(id)
    const allData = useLoaderData()
    // console.log(allData)
    
    useEffect(()=>{
        const findCars = allData?.find(value => value._id ===  id)
        SetCar(findCars)
    },[allData, id])
    // console.log(Car)

    const handleCartBtn = () =>{

        fetch('http://localhost:5000/cartData' , {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(Car)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged === true){
                Swal.fire(
                    'Car Added',
                    'Well done! Your item has been added successfully. Please go to My Cart to check out. Thanks',
                    'success'
                  )
            }
        })

    }
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='space-y-5 p-3'>
               <img src={Car.photo} alt="" />
               <h1 className='text-4xl font-semibold'>Model  {Car.name}</h1>
               <h1 className='text-3xl font-semibold'>Brand  <span className='text-4xl'>{Car.brandname}</span></h1>
               <h1 className='text-3xl font-semibold'>Price  <span className='text-4xl'>{Car.price} </span>BDT</h1>
               <h1 className='text-3xl font-semibold'>Rating  <span className='text-4xl mx-3'>{Car.rating} </span>out of 10</h1>
               <button type='submit' onClick={handleCartBtn} className='w-full px-6 py-3 bg-black text-white text-2xl '>Add to Cart</button>
            </div>
        </div>
    );
};

export default CarDetails;