import React from "react";
import ContactListItem from "./ContactListItem";
import ContactsWrapper from "./ContactsStyled";

const ContactList = ({ contacts, filter, deleteContactById }) => {
  return (
    <ContactsWrapper>
      <ul className="contact-list">
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
    </ContactsWrapper>
  );
};

export default ContactList;
