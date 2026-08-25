import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

export default function ProtectedRoute(){
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to="/login" element={<Login />} /> // Redirect the user back to the login page
    }

    return <Outlet />
}