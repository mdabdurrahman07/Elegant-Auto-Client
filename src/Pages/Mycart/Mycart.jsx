import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2'


const Mycart = () => {
   
    const CartData = useLoaderData()

    const [UpdatedData , SetUpdatedData] = useState(CartData)
    


   
    const handledelete = (_id) => {
        console.log(_id)
        fetch(`https://local-car-server-eraw8l33h-md-abdur-rahmans-projects-58537ada.vercel.app/cartData/${_id}` , {
            method : "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        const filteredData = UpdatedData.filter(value => value._id !== _id)
                        SetUpdatedData(filteredData)
                        Swal.fire(
                            'Deleted!',
                            'Your Item has been deleted.',
                            'success'
                          )
                    }
                  })
            }

           
        })
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="overflow-x-auto mb-96">
  <table className="table">
    {/* head */}
    <thead className='bg-black'>
      <tr>
        
        <th className='text-2xl font-semibold text-zinc-200'>Brand Name</th>
        <th className='text-2xl font-semibold text-zinc-200'>Model </th>
        <th className='text-2xl font-semibold text-zinc-200'>Type</th>
        <th className='text-2xl font-semibold text-zinc-200'>Price</th>
        <th className='text-2xl font-semibold text-zinc-200'>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        UpdatedData.map(cart =>  <tr key={cart._id}>
       
            <td className='text-xl font-medium'>{cart.brandname}</td>
            <td className='text-xl font-medium'>{cart.name}</td>
            <td className='text-xl font-medium'>{cart.type}</td>
            <td className='text-xl font-medium'>{cart.price}</td>
            <td><button type='submit'  onClick={()=> handledelete(cart._id)}><AiFillDelete className='text-2xl font-medium'></AiFillDelete></button></td>
            
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Mycart;