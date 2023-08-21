import React from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

function Home() {
    const { isAuth, toggleAuth } = React.useContext(AuthContext);
    if (isAuth) {
        return <Navigate to={"/users"} />
    }
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={toggleAuth}>LOGIN ({isAuth ? "true" : "false"})</button>
        </>

    )
}

export default Home;