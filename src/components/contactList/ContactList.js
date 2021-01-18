import React from "react";
import PropTypes from "prop-types";
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContactById: PropTypes.func,
};
