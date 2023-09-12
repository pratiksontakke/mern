import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar_img.jpg"
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={avatar} alt={name}></img>
            <div className="content">
                <Link to={{
                    pathname: `/contact/${id}`,
                    state: { contact: props.contact }
                }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon" onClick={() =>
                props.clickHandler(id)
            } style={{ color: "red", marginTop: "7px" }}></i>
        </div>
    )
}

export default ContactCard;

