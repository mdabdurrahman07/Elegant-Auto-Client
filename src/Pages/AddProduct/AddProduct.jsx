
import React, { useRef } from 'react';
import Swal from 'sweetalert2'
const AddProduct = () => {
  const formRef = useRef(null)
    const handleaddproduct = e =>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('model')
        const brandname = form.get('brand')
        const type = form.get('type')
        const price = form.get('price')
        const description = form.get('description')
        const rating = form.get('rating')
        const photo = form.get('photo')

        const cardetails = {name , brandname , type , price , description , rating , photo}

        console.log(cardetails)

        fetch('https://local-car-server-yq2f3uwx1-md-abdur-rahmans-projects-58537ada.vercel.app/brands', {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cardetails)

        })
        .then(res=> res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged == true){
            Swal.fire({
              icon: 'success',
              title: 'Thanks ',
              text: 'Your Data Added Successfully',
            
            })
            formRef.current.reset()
            
          }
        })
        
    }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl mb-5 md:mb-10'>Fill up this form to add your product</h1>

            <div className="hero ">
    
    <div className="card flex-shrink-0 w-full max-w-lg drop-shadow-lg bg-base-100">
      <form ref={formRef} onSubmit={handleaddproduct} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Name</span>
          </label>
          <input type="text" name='model' placeholder="Axio , BMW X3 , Audi A4" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Brand Name</span>
          </label>
          <input type="text" name='brand' placeholder="Audi , BMW , Toyota" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Photo Url</span>
          </label>
          <input type="text" name='photo' placeholder="img direct link" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Type</span>
          </label>
          <input type="text" name='type' placeholder="Sedan , SUV , Sports Car" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Price</span>
          </label>
          <input type="text" name='price' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Short Description</span>
          </label>
          <input type="text" name='description'  className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-medium">Rating</span>
          </label>
          <input type="number" name='rating'   className="input input-bordered " required />
        </div>
        <div className="flex justify-center mt-6">
          <button type='submit' className="bg-black text-white text-2xl font-medium rounded-full px-6 py-3">Add Product</button>
        </div>
      </form>
    </div>

</div>
        </div>
    );
};

export default AddProduct;