import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PraivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    if(loading){
     return  <p> লোড হইতেছে</p>
    }
    if(user && user.uid){
        return children;
    }
   return <Navigate to = '/signin' state={{from:location}} replace></Navigate>
};

export default PraivateRoute;