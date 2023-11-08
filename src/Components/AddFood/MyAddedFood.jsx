import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const MyAddedFood = () => {
    const [food,setfood]=useState();
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

        </div>
    );
};

export default MyAddedFood;