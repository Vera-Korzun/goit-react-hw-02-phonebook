import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, filter, deleteContactById }) => {
  return (
    <ul>
      {contacts
        .filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContactById={deleteContactById}
          />
        ))}
    </ul>
  );
};

export default ContactList;
