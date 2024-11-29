import { Navigate } from 'react-router-dom';
import { auth } from '/src/firebase';
export default function ProtectedRoute({
    children,
}: {
    children:React.ReactNode;
}){
    const user = auth.currentUser;
    console.log(user)
    if(user === null){
        return <Navigate to="/login" />
    }
    return children
}