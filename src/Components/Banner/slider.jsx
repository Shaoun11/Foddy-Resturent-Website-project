import React from 'react';

const Slider = () => {
    return (
        <div>
             <div >
            <div className="carousel sm:w-full w-[330px] h-[500px] sm:h-[800px] ">
  <div id="slide1" className="carousel-item relative sm:w-full w-[330px] h-[500px] sm:h-[800px] ">
    <img src='https://i.ibb.co/7v2yLN7/hero-bg.jpg' className="sm:w-full w-[330px] h-[500px] sm:h-[800px]  " />
    <div className="absolute bg-gradient-to-r from-[#151519] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
    <div className=' pl-16 space-y-7 w-1/2'>
    <h2 className='text-6xl text-white font-bold' >Special Offer For Your Favourite Food</h2>
     <p className='text-lg font-medium text-[#FFF]'>We appreciate your patronage and would like to offer you an exclusive discount for your next visit to fooddy. Enjoy a 15% discount on your entire meal. This is our way of saying thank you for choosing us.</p>
     <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >Discover More </button>
     <button className='btn btn-outline text-white border-yellow-400 btn-warning ' >Leatest Food</button>
    </div>
    </div>
    <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative sm:w-full w-[330px] h-[500px] sm:h-[800px] ">
    <img src='https://i.ibb.co/dQHNP8P/slider2-1920x1080.jpg' className="sm:w-full w-[330px] h-[500px] sm:h-[800px] " />
    <div className="absolute bg-gradient-to-r from-[#0a0909] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
    <div className=' pl-16 space-y-7 w-1/2'>
    <h2 className='text-6xl text-white font-bold' >Special Offer For Your Favourite Food</h2>
     <p className='text-lg font-medium text-[#FFF]'>We appreciate your patronage and would like to offer you an exclusive discount for your next visit to fooddy. Enjoy a 15% discount on your entire meal. This is our way of saying thank you for choosing us.</p>
     <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >Discover More </button>
     <button className='btn btn-outline text-white border-yellow-400 btn-warning ' >Leatest Food</button>
    </div>
    </div>
    <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative sm:w-full w-[330px] h-[500px] sm:h-[800px] ">
    <img src='https://i.ibb.co/9Hf7NFC/Pngtree-a-perfectly-sliced-cheese-pizza-5796625.jpg' className="sm:w-full w-[330px] h-[500px] sm:h-[800px] " />
    <div className="absolute bg-gradient-to-r from-[#101012] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
    <div className=' pl-16 space-y-7 w-1/2'>
    <h2 className='text-6xl text-white font-bold' >Special Offer For Your Favourite Food</h2>
     <p className='text-lg font-medium text-[#FFF]'>We appreciate your patronage and would like to offer you an exclusive discount for your next visit to fooddy. Enjoy a 15% discount on your entire meal. This is our way of saying thank you for choosing us.</p>
     <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >Discover More </button>
     <button className='btn btn-outline text-white border-yellow-400 btn-warning ' >Leatest Food</button>
    </div>
    </div>
    <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative sm:w-full w-[330px] h-[500px] sm:h-[800px] ">
    <img src='https://i.ibb.co/WvMh3Ww/Pngtree-delicious-fried-chicken-food-hq-494971.png' className="sm:w-full w-[330px] h-[500px] sm:h-[800px] " />
    <div className="absolute bg-gradient-to-r from-[#151519] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
    <div className=' pl-16 space-y-7 w-1/2'>
    <h2 className='text-6xl text-white font-bold' >Special Offer For Your Favourite Food</h2>
     <p className='text-lg font-medium text-[#FFF]'>We appreciate your patronage and would like to offer you an exclusive discount for your next visit to fooddy. Enjoy a 15% discount on your entire meal. This is our way of saying thank you for choosing us.</p>
     <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >Discover More </button>
     <button className='btn btn-outline text-white border-yellow-400 btn-warning ' >Leatest Food</button>
    </div>
    </div>
    <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Slider;