import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import ContactDetail from './ContactDetail';

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

    setContacts([...contacts, { id: uuidv4(), ...contact }]);
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

      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      {/* <ContactCard /> */}
      {/* <Route index element={<Home />} /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/*" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetail contacts={contacts}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
