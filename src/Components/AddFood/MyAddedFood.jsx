import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';
import MyAddedCart from './MyAddedCart';
import Footer from '../Footer/Footer';

const MyAddedFood = () => {
    const [food,setfood]=useState([]);
    const addedfood=useLoaderData();


    const {user}=useContext(Authcontext);
    const addedcart=user?.email;

    useEffect(()=>{
        const addedfoodfilter=addedfood?.filter(cart=>cart?.useremail==addedcart)
        setfood(addedfoodfilter)
    },[addedcart,addedfood])

    console.log(food);

    return (
        <div>
             <Helmet>
                <title>Foody resturent My Added Food</title>
             
            </Helmet>
            <div>
                <h1 className='text-5xl font-semibold text-center'>My Added <span className='text-red-500'>Food</span></h1>
            </div>
            <div className='max-w-5xl mx-auto mt-20 mb-28  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
                {
                    food.map(foods=><MyAddedCart key={foods._id} food={foods} ></MyAddedCart>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyAddedFood;