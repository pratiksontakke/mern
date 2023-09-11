import './App.css';
import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     "name": "Dipesh",
  //     "email": "malvia@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     "name": "Nikesh",
  //     "email": "nicks@gmail.com"
  //   }
  // ]

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => { return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [] });
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid, ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* <ContactCard /> */}
    </div>
  );
}

export default App;
