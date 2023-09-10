import './App.css';
import React from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";


function App() {

  const contacts = [
    {
      id: "1",
      "name": "Dipesh",
      "email": "malvia@gmail.com"
    },
    {
      id: "2",
      "name": "Nikesh",
      "email": "nicks@gmail.com"
    }
  ]

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
      {/* <ContactCard /> */}
    </div>
  );
}

export default App;
