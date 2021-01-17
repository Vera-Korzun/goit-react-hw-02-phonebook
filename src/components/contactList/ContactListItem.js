import React from "react";

const ContactListItem = ({ contact, deleteContactById }) => {
  return (
    <>
      <li key={contact.id}>
        <span>Name: {contact.name}</span>
        <span>Number: {contact.number}</span>
        <button type="button" data-id={contact.id} onClick={deleteContactById}>
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactListItem;
