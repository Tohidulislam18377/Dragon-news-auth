import React, { useContext, } from 'react';
import { AuthContact } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContact)
    const location = useLocation()
    console.log(location);

    if(loader){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>}

export default PrivateRoute;