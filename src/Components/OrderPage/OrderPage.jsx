import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { MdAttachMoney} from "react-icons/md"
import { Helmet } from "react-helmet-async";

const OrderPage = () => {
const {user}=useContext(Authcontext);
const fooddata=useLoaderData();
const navigate=useNavigate();
const {foodImage,_id,foodName,description,useremail,foodCategory,price,order}=fooddata;
  const handleform=e=>{

    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const BrandName=form.BrandName.value;
    const quantity=form.quantity.value;
    const Price=form.Price.value;
    const date=form.date.value;
    const authorimg=user?.photoURL;
    if (quantity>order) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Unavailable Quantity!",
          });
     }
     if (fooddata?.useremail==email) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You didn't purches your own product!",
      });
     }
   
    const data={name,email,BrandName,quantity,Price,date,foodImage,description,authorimg}
 
    fetch('https://assginment-11-server-site.vercel.app/order',{
        method:"post",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(value=>{
        console.log(value);
        if (value.insertedId) {
            Swal.fire({
                title: 'Success',
                text: 'You Order Placed',
                icon: 'success',
                confirmButtonText: 'Thank you'
              })
              
           form.reset() ;
           navigate("/allfood")
           

        }
    })

  }


    return (
      <div className="lg:flex bg-stone-100 pb-52  md:flex items-center justify-center">
           <Helmet>
                <title>Foody resturent Purches Food</title>
             
            </Helmet>
        <div>
            <img className="h-full w-full" src="https://i.ibb.co/hWhRX61/Untitled-design-5.png" alt="" />
        </div>
          <div className="flex  items-center justify-center p-12">

<div className="mx-auto w-full max-w-[550px]">
<h1 className="text-3xl text-center font-semibold">Purchase Your Food </h1>
  <form onSubmit={handleform}  >
    <div className="mb-5">
      <label
        for="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Food Name
      </label>
      <input
        type="text"
        defaultValue={foodName}
        name="name"
        id="name"
        placeholder="Name"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-5">
      <label
        for="img"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
      Buyer Email 
      </label>
      <input
        type="disable"
          defaultValue={user?.email}
         disabled
        name="email"
        id="img"
        placeholder="Photo URL"
        className="block w-full rounded-md border disabled border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Buyer Name
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            name="BrandName"
            id="fName"
            disabled
            placeholder="Brand Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Quantity
          </label>
          <input
            type="text"
            required
            name="quantity"
            id="fName"
            placeholder="Quantity"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            
            className="mb-3 block  text-base font-medium text-[#07074D]"
          >
           Price
          </label>
          <input
            type="text"
            name="Price"
            defaultValue={price}
            id="price"
            placeholder="Price"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
          Date
          </label>
          <input
            type="date"
            name="date"
            id="price"
            required
            placeholder="Type"
            className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
     
    </div>
   
    <div>
      <button
        className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"
      >
       Purchase
      </button>
    </div>
  </form>
</div>
</div>
      </div>
    );
};

export default OrderPage;