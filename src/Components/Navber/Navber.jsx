
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    const { user, logout } = useContext;
    const link=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/adddata"}>Add Product</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
    <li><NavLink to={"/contact"}>Contact</NavLink></li>
    <li><NavLink to={"/mycart"}>Mycart</NavLink></li>

  </>
    return (

    <div className="navbar  w-full  px-[25px] mx-auto bg-white  ">
    <div className="navbar-start ">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
        </ul>
      </div>
      
      <img className='lg:w-28 md:w-28 w-20' src="https://i.ibb.co/h2nm1tB/logo-7.webp" alt="" />
      {/* <a className="text-gray-600 normal-case font-bold mt-5 ml-1 md:ml-3 lg:ml-3 lg:text-sm md:text-sm text-[10px] ">Electronics</a> */}
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {link}
      </ul>
    </div>
    <div className="lg:flex md:flex gap-3 navbar-end">
    {/* <p className=''>{user?.displayName}</p>
      <div>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          {user? <div className="w-14 rounded-full">
          
            <img src={user?.photoURL}/>
         
          </div>:<div className="w-14  rounded-full">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
          </div>}
        </label>
      </div>
     <div>
      {
        user?<Link onClick={logout} >  <button className="btn btn-outline font-medium cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white ">Log Out</button></Link> :
        <Link to={"/login"}>  <button className="btn btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-600 hover:text-white  ">Log in</button></Link>
   
      }

    
     </div> */}
     {user?.email ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink
                  to="/user"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/user/orders"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Orders
                </NavLink>

                <div
                  onClick={logout}
                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'btn btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-600 hover:text-white' : 'btn btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-yellow-400 hover:text-white'
              }
            >
              Login
            </NavLink>
          )}
    </div>
  </div>
  
    );
};

export default Navber;