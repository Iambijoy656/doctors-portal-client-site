import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { BounceLoader } from "react-spinners";
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user.email)
    const location = useLocation()

    if (loading || isAdminLoading) {
        return (
            <div className="flex justify-center my-10">
                <BounceLoader color="skyblue" size={60}></BounceLoader>
            </div>
        );
    }


    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;