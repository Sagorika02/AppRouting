import React from "react";
import { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import AddContact from "../AddContact/AddContact";

function ContactList() {
  const [contacts, setContacts] = useState([
    {
      fname: "Mindy",
      lname: "Kaling",
      email: "mindy@gmail.com",
      city: "LA",
      phone: "4658645123"
    }
  ]);

  function AddContactFunction(contact) {
    setContacts([...contacts, contact]);
  }
  function DeleteContactFunction(id) {
    let filteredcontacts = contacts.filter((x) => x.phone !== id);
    setContacts(filteredcontacts);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <h2>Contact List</h2>
        {contacts.map((item) => (
          <Contact
            DeleteContact={DeleteContactFunction}
            key={item.phone}
            fname={item.fname}
            lname={item.lname}
            email={item.email}
            city={item.city}
            phone={item.phone}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
