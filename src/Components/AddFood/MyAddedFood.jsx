import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';
import MyAddedCart from './MyAddedCart';

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
                <h1 className='text-5xl font-semibold text-center'>My Added Food</h1>
            </div>
            <div>
                {
                    food.map(foods=><MyAddedCart key={foods._id} food={foods} ></MyAddedCart>)
                }
            </div>
        </div>
    );
};

export default MyAddedFood;