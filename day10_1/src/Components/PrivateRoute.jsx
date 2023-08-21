import React from "react";
import { AuthContext } from "../Pages/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const { isAuth } = React.useContext(AuthContext);
    
    console.log(children);

    if (!isAuth) {
        return <Navigate to={`/`} />
    }

    return children;
}

export default PrivateRoute;