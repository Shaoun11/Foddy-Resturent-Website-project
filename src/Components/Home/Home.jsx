import React, { useState } from 'react';
import Slider from '../Banner/slider';
import { Link, useLoaderData } from 'react-router-dom';
import SortedCard from '../pages/SortedCard';
import { Helmet } from 'react-helmet-async';
import Contact from '../Contact/Contact';
import Team from '../Contact/Team';
import Footer from '../Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import Popularfood from '../Testimonial/Popularfood';
import DiscountComp from '../Testimonial/Discount';


const Home = () => {
   
    const {result}=useLoaderData();
  
    const slicedData = result.slice(0, 6);
   

    return (
        <div>
            <Helmet>
                <title>Foody resturent Home</title>
             
            </Helmet>
           <Slider></Slider> 

            <div>
                <h1 className='font-bold lg:text-6xl md:text-6xl text-[43px] text-center mt-20 mb-16'>Our <span className='text-red-500'>Top</span> Selling <span className='text-red-500'>Food</span></h1>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
            {
                slicedData.map(sort=><SortedCard key={sort._d} data={sort} ></SortedCard>)
            }
             
           </div>
           <Link to={'/allfood'}><div className='flex mb-10 justify-center pt-10'>
             <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >See All Food </button> 
             </div></Link>
             <Popularfood></Popularfood>
            <DiscountComp></DiscountComp>
             <Team></Team>
             
             <Testimonial></Testimonial>
             <Contact></Contact>
             <Footer></Footer>
             
        </div>
    );
};

export default Home;