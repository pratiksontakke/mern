import React from "react";
import avatar from "../images/avatar_img.jpg"
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={avatar} alt={name}></img>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
        </div>
    )
}

export default ContactCard;

