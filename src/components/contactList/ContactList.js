import React from "react";

const ContactList = ({ contacts, deleteContactById }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>Name: {contact.name}</span>
          <span>Number: {contact.number}</span>
          <button
            type="button"
            data-id={contact.id}
            onClick={deleteContactById}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
