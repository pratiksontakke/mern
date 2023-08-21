import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {

    const links = [
        { path: "/", title: "Home" },
        { path: "/about", title: "About" },
        { path: "/contact", title: "Contact" },
        { path: "/users", title: "Users" }
    ]

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "80%",
            margin: "auto",
            marginTop: "20px"
        }}>
            <h1>{process.env.REACT_APP_GREETINGS_ENGLISH}</h1>
            <h1>{process.env.REACT_APP_GREETINGS_HINDI}</h1>
            {links.map((link) =>
                <NavLink key={link.path} to={link.path} className={({ isActive }) => {
                    return isActive ? styles.active : styles.default
                }} end>{link.title}</NavLink>
            )}
        </div>
    )
}

export default Navbar;