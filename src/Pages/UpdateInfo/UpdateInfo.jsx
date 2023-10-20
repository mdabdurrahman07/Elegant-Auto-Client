import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateInfo = () => {
    const [UpdateCar , SetUpdateCar] = useState([])
    const {id} = useParams()
    console.log(id)
    
    const CarInfos = useLoaderData()

    useEffect(()=>{
        const findCar = CarInfos.find(value => value._id === id)
        SetUpdateCar(findCar)
    },[CarInfos, id])





    const handleUpdatedProduct = e =>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('model')
        const brandname = form.get('brand')
        const type = form.get('type')
        const price = form.get('price')
        const description = form.get('description')
        const rating = form.get('rating')
        const photo = form.get('photo')

        const UpdatedCarDetails = {name , brandname , type , price , description , rating , photo}

        console.log(UpdatedCarDetails)
        
        fetch(`https://local-car-server-yq2f3uwx1-md-abdur-rahmans-projects-58537ada.vercel.app/brands/${UpdateCar._id}` , {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(UpdatedCarDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Car Updated',
                    'Well done! Your Car has been Updated successfully. Thanks',
                    'success'
                  )
                  
            }
        })
    }
    return (
        <div>
           <h1 className='text-center font-bold text-4xl mb-5 md:mb-10'>Fill up this form to Update your product</h1>

           <div className="hero ">
    
    <div className="card flex-shrink-0 w-full max-w-lg drop-shadow-lg bg-base-100">
      <form  onSubmit={handleUpdatedProduct} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Name</span>
          </label>
          <input type="text" name='model' defaultValue={UpdateCar.name} placeholder="Axio , BMW X3 , Audi A4" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Brand Name</span>
          </label>
          <input type="text" name='brand' defaultValue={UpdateCar.brandname} placeholder="Audi , BMW , Toyota" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Photo Url</span>
          </label>
          <input type="text" name='photo' defaultValue={UpdateCar.photo} placeholder="img direct link" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Type</span>
          </label>
          <input type="text" name='type' defaultValue={UpdateCar.type} placeholder="Sedan , SUV , Sports Car" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Price</span>
          </label>
          <input type="text" name='price' defaultValue={UpdateCar.price} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Short Description</span>
          </label>
          <input type="text" name='description' defaultValue={UpdateCar.description} className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Rating</span>
          </label>
          <input type="number" name='rating' defaultValue={UpdateCar.rating}  className="input input-bordered " required />
        </div>
        <div className="flex justify-center mt-6">
          <button type='submit' className="bg-black text-white text-2xl font-medium rounded-full px-6 py-3">Update Product</button>
        </div>
      </form>
    </div>

</div>
        </div>
    );
};

export default UpdateInfo;
