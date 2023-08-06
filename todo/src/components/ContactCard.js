import React from 'react';

const ContactCard = (props) => {
    const { contact } = props;
    return (
        <li key={contact.id}>
            <div className='bg-white rounded-lg shadow-lg p-6 flex justify-between'>
                
                <div>
                    <h2 className='text-lg font-bold mb-2'>{contact.name}</h2>
                    <h2 className='text-gray-700 text-base'>{contact.email}</h2>
                </div>
                <div>
                    <i className='fa fa-trash-o text-red-500 cursor-pointer'></i>
                </div>
            </div>
        </li>
    );
};

export default ContactCard;
