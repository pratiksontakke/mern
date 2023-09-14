import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';
import api from "../api/contacts";
import { uuid } from 'uuidv4';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // RetrieveContacts  
  const retrieveContacts = async () => {
    try {
      const response = await api.get("/contacts")
      return response.data;
    } catch (error) {
      console.log("Error fetching contacts:", error);
    }
  };



  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = () => {

  }

  const removeContactHandler = async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const getAllContacts = async () => {
      try {
        const allContacts = await retrieveContacts();
        if (allContacts) {
          setContacts(allContacts);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    getAllContacts();
  }, []);


  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} />
          {/* <Route path="/*" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
