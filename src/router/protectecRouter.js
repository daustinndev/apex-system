import { Navigate } from "react-router-dom";
import { SplashScreenLoading } from "../components/loading";
import { useAuth } from "../context/authContext";

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) return <SplashScreenLoading />
    
    if (user === null) return <Navigate to='/sign-in' />
    
    return <>{children}</>
}