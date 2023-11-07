import React from 'react';
import { Link } from 'react-router-dom';

const DiscountComp = () => {
    return (
        <section className="overflow-hidden max-w-7xl mx-auto  pt-24 lg:pb-20  md:pb-16 pb-10 rounded-lg md:grid md:grid-cols-3">
<img
alt="Trainer"
src="https://i.ibb.co/Fb1PM0x/Burger-10.jpg"
className=" rounded w-full object-cover md:[300px] lg:h-[500px]"
/>

<div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
<p className="text-sm font-semibold uppercase tracking-widest">
  Run with the pack
</p>

<h2 className="mt-6 font-black uppercase">
  <span className="text-4xl text-gray-600 font-black sm:text-5xl  lg:text-6xl">
    Get 20% off  For <br />  Sgin Up
  </span>
  




  <span className="mt-2 block text-sm">On your next order over $50</span>
</h2>
<form action="#" className="sm:flex pt-10 sm:gap-4">
    <div className="sm:flex-1">
      <label htmlFor="email" className="sr-only">Email</label>

      <input
        type="email"
        placeholder="Email address"
        className="w-full border-2 rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
      />
    </div>

   <Link to={"/register"}>
   <button
      type="submit"
      className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
    >
      <span className="text-sm font-medium"> Sign Up </span>

      <svg
        className="h-5 w-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
   </Link>
  </form>
<a
  className="mt-8 inline-block w-full bg-red-600 rounded py-4 text-sm font-bold uppercase tracking-widest text-white"
  href=""
>
  Get Discount
</a>

<p className="mt-8 text-xs font-medium uppercase text-gray-400">
  Offer valid until 24th March, 2024 *
</p>
</div>

</section>
    );
};

export default DiscountComp;