import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import avatar from "../images/avatar_img.jpg"

const ContactDetail = ({ contacts }) => {
    const { id } = useParams();
    const contact = contacts.find((c) => c.id === id);

    if (!contact) {
        return <div>Contact not found</div>;
    }
    return (
        <div className="main" style={{ marginTop: "50px" }} key={contact.id}>
            <div className="ui card centered">
                <div className="image">
                    <img src={avatar} alt={contact.name}></img>
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail;