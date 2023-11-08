import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';
import MyOrderCart from './MyOrderCart';
import { Helmet } from 'react-helmet-async';

const MyOrder = () => {
    const [orderdata,setorder]=useState([]);
    const order=useLoaderData();
    const [datacart,setdata]=useState(order);
    
    
 
    const {user}=useContext(Authcontext);
    const ordercart=user?.email;

    useEffect(()=>{
        const ordercartfilter=datacart?.filter(cart=>cart.email==ordercart)
        setorder(ordercartfilter)
    },[datacart,ordercart])
  
  
    if (orderdata.length<1) {
        return <div className=''>
       <div>
       <img className='max-h-screen items-center ml-72  ' src="https://i.ibb.co/SfrrLfs/output-onlinegiftools.gif" alt="" />
       </div>
        <p className='lg:text-4xl text-center md:text-3xl text-2xl font-semibold'>Now your Order is empty !</p>
        </div>
    }


    return (
        <>
        <Helmet>
                <title>Foody resturent My Order Page</title>
             
            </Helmet>
            <div>
                <h1 className='font-bold lg:text-6xl md:text-6xl text-[43px] text-center mt-6 mb-16'>My  Ordered<span className='text-red-500'></span>  <span className='text-red-500'>Food</span></h1>
            </div>
        <div className='max-w-6xl mx-auto  grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-6 '>
           {
            orderdata.map(data=><MyOrderCart key={data._id}
                datacart={datacart}
                setdata={setdata}
                data={data} ></MyOrderCart>)
           } 
        </div>
        </>
    );
};

export default MyOrder;