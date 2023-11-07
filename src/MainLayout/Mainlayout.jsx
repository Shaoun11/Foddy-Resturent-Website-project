import React from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Toaster></Toaster>
          
        </div>
    );
};

export default Mainlayout;