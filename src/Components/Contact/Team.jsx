import React from 'react';

const Team = () => {
    return (
        <div>
         
<div className="py-20 ">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-6xl">Our Master <span className='text-red-500'>Chefs</span></h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">This is our popular cooking competition show featuring amateur home cooks. Contestants compete in culinary challenges judged by experts, with one contestant eliminated each episode until a winner is crowned</p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-[260px] lg:h-[360px]" 
                    src="https://i.ibb.co/RT5CQNv/istockphoto-1298088270-612x612.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 className="text-2xl">Hentoni Doe</h4>
                    <span className="block text-sm text-gray-500">Head chef</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-[580px] lg:h-[450px]" 
                    src="https://i.ibb.co/R3QjwRr/photo-1581299894007-aaa50297cf16.png" alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 className="text-2xl">Jonathan Doe</h4>
                    <span className="block text-sm text-gray-500">Chief Executive chef</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-[260px] lg:h-[360px]" 
                    src="https://i.ibb.co/SvfHBXy/gettyimages-1166733890-170667a.jpg " alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 className="text-2xl">Anabelle Doe</h4>
                    <span className="block text-sm text-gray-500">Executive chef.</span>
                </div>
            </div>
        </div>
    </div>
</div> 
        </div>
    );
};

export default Team;