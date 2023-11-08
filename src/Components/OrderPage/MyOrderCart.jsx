/* eslint-disable react/prop-types */
import axios from 'axios';
import Swal from 'sweetalert2';

const MyOrderCart = ({data,setdata,datacart}) => {
    console.log(datacart);
    const {_id,name,email,BrandName,quantity,Price,date,foodImage,description,authorimg}=data;
   
    const handle=_id=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            
            axios.delete(`http://localhost:5000/order/${_id}`,data)
    .then(() =>{
        const remainingfood = datacart.filter(foods=>foods._id!==_id)
        setdata(remainingfood)
        if (data.deletedCount >0) {
            Swal.fire(
                'Deleted!',
                'Your cart has been deleted.',
                'success'
              ) 
              
             
        }} );
          
          
          }
        })
      }

    return (
        <div>
            
<div className="flex flex-col justify-center ">
	<div
		className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div className="w-[240px] h-[270px] bg-white grid place-items-center">
			<img src={foodImage} alt="tailwind logo" className="rounded-xl" />
    </div>
			<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
					<p className="text-gray-500 font-medium hidden md:block">Vacations</p>
					<div className="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p className="text-gray-600 font-bold text-sm ml-1">
							4.96
							<span className="text-gray-500 font-normal">({quantity})</span>
						</p>
					</div>
					<div className="">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path fill-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clip-rule="evenodd" />
						</svg>
					</div>
					<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
						{date}</div>
				</div>
				<h3 className="font-black text-gray-800 md:text-2xl text-xl">{name}</h3>
				<p className="md:text-sm text-gray-500 text-base">{description.slice(0,100)}</p>
				<div className='flex justify-between'>
                <div className=" flex gap-3 items-center font-semibold text-gray-800  hover:bg-gray-100 rounded-md hover:cursor-pointer">
            <img className="w-8 h-8 rounded-full" src={authorimg} alt="Rebecca Burke"/>
            <div className="flex flex-col">
                <div className='text-sm'>
                    {BrandName}
                    <p className='text-gray-400 text-sm font-normal'> Food Owner</p>
                </div>
               
            </div>
        </div>
        <p className="text-xl font-black text-gray-800">
					${Price}
					<span className="font-normal text-gray-600 text-base"></span>
				</p>
        </div>
        <button onClick={()=>handle(_id)}   className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white"   >Delete</button>
			</div>
            
		</div>
	</div>
        </div>
    );
};

export default MyOrderCart;