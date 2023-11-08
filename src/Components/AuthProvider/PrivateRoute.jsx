

import { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { Authcontext } from './AuthProvider';
import Loading from '../Loaading/Loading';


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(Authcontext);
    const location=useLocation();
   
     
    if (loader) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
     return <Navigate state={location.pathname} to={"/login"} ></Navigate>

  
};

export default PrivateRoute;