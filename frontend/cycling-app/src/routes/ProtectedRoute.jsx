import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    //Check if user is authenticated
    if(!token)
    {
        //redirect to login page
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};