import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log(contacts);

  return (
    <>
      {contacts.map(contact => (
        <h3 key={contact.id}>{contact.name}</h3>
      ))}
    </>
  );
};

export default Contacts;
