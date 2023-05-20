import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <div>
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user?.email){
        return children;
    }

    return ( <Navigate to='/login' state={{from: location}} replace>
            {children}
        </Navigate>

    );
};

export default PrivateRoutes;