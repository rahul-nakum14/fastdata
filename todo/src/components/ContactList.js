import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) =>{

    const renderContactList = props.contacts.map((contact)=>{
        return <ContactCard contact={contact}></ContactCard>;
    });

    return(
        <ul className='list-none'>
            {renderContactList}
        </ul>
    );
};

export default ContactList;
