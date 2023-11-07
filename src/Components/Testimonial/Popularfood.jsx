import React from 'react';

const Popularfood = () => {
    return (
        <div>
        <section
            className="overflow-hidden lg:pt-14 md:pt-10 pt-6  sm:grid sm:grid-cols-2 sm:items-center"
        >
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div
                    className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                >
                    <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
                        Experience the best pizza deals in town.Slice of Heaven!
                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">

                    Discover the best pizza deals in town! Indulge in mouthwatering, cheesy goodness with our irresistible offers. From classic margheritas to gourmet toppings, savor savings and delicious flavors. Hurry, these hot deals won't last long!


                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Purches Today
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt="Violin"
                src="https://i.ibb.co/Rpjsr73/SPICY-PIZZA-2-scaled-e1640871697402.jpg"
                className="h-full rounded-md md:rounded-l-full  w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
        </section >
        <div className='mt-28 mb-28'>
        
        </div>
       
    </div>
    );
};

export default Popularfood;