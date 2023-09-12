import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    // const contacts = [
    //     { "id": "ccbc984f-eb95-4eab-bff4-3132d736351d", "name": "Pratik", "email": "pratikass488@gmail.com" },
    //     { "id": "417f69fe-17d0-4912-9f3a-6c6f26d81808", "name": "Amravati", "email": "iesparagjain@gmail.com" },
    //     { "id": "805eb2d1-f74b-49ab-b6f3-f0f39cefdba3", "name": "Pratik", "email": "iesparagjain@gmail.com" }
    // ]

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });

    return (
        <div style={{ marginTop: "50px" }} class="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">
                        Add Contact
                    </button>
                </Link>
            </h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}
export default ContactList;