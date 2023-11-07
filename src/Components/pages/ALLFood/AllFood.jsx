import React, { useEffect, useState } from 'react';
import SortedCard from '../SortedCard';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import FilterCard from './filterCard';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { FiSearch } from 'react-icons/fi';

import Loading from '../../Loaading/Loading';



const AllFood = () => {
    const [search,setsearch]=useState('');

    // const { total } = useLoaderData();
   const searchQuery = search.toLowerCase(); 
   const [page,setpage]=useState(0);
   const [loader,setloader]=useState(true);
    console.log(page);


    //pagination add
    // const {data:{result,total},isLoading,isError}=useQuery({
    //     queryKey:['allfoods',page ],
    //     queryFn:async ()=>fetch(`http://localhost:5000/allfoods?page=${page}`).then((response)=>response.json()),
        
    //     initialData:{result:[],total:0}
    // })

    //different way query
    const {data:{result,total},isLoading,isError}=useQuery({
        queryKey:['allfoods',page ],
        queryFn:async ()=>{
            const response=await fetch(`http://localhost:5000/allfoods?page=${page}`)
            const data=await  response.json()
            setloader(false)
            return data;},
        initialData:{result:[],total:0}
    })


    const numberofpage=Math.ceil(total/9);

    const pages=[... Array(numberofpage).keys()]
    
    if (loader) {
        return <Loading></Loading>
     }
 
    console.log(loader);
   

    
   





    return (
        <div>
            <Helmet>
                <title>Foody resturent All Food</title>

            </Helmet>
            <div className='sm:w-full  w-[330px] flex lg:flex-row md:flex-row flex-col justify-between lg:gap-6 md:gap-4 gap-5 h-[500px] sm:h-[700px] bg-[#ffb30e]'>
                <div>
                    <div className=" lg:pt-48 lg:pl-16 md:pl-6 md:pt-32  bg-[#ffb30e] flex justify-center items-center">
                        <div className="container mx-auto bg-gray-200 rounded-lg p-14">
                            <form >
                                <h1 className="text-center font-bold text-gray-900 text-4xl">
                                    Find your favourite food do you like...!
                                </h1>
                                <p className="mx-auto font-normal text-sm my-6 max-w-lg">
                                    Enter the food name correctly to find the food you searched for. Searched foods will not be found if your food names are incorrect.
                                </p>
                                <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                                    <input
                                        className="text-base text-gray-400 flex-grow outline-none px-2"
                                        type="text"
                                        name='search'
                                        
                                        onChange={(e) => setsearch(e.target.value)}
                                        placeholder="Search your Food name"
                                    />
                                    <div className="ms:flex items-center px-2 py-1  rounded-lg space-x-4 mx-auto">

                                        <FiSearch className='text-xl' ></FiSearch>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=' lg:pt-8 lg:mr-4 md:pt-36'>
                    <img className='w-[600px] h-600px]' src="https://i.ibb.co/KVJJhSm/hero-header.png" alt="" />
                </div>
            </div>
            <h1 className='text-6xl lg:mt-10 md:mt-10 mt-[400px] mb-16 font-bold text-center' >  ALL <span className='text-red-500'>Food</span> </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
                {
                    result.filter((item)=>{
                        return  item.foodName.toLowerCase().includes(searchQuery);
                    }).map(food => <SortedCard key={food._id} data={food} > </SortedCard>)
                }

            </div>
          
            <div className='flex join justify-center mt-12 mb-16' >
                {
                    pages.map((item,index)=><button onClick={()=>setpage(index)} className=  { ` ${page == index ?"bg-red-500 text-white":"bg-yellow-400 text-white"} lock h-8 w-10 rounded border border-gray-100  text-center leading-8 `} >{index+1}</button>)
                }
            </div>

        </div>
    );
};

export default AllFood;