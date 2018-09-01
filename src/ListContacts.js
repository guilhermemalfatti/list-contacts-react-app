import React from 'react'
import PropTypes from 'prop-types'

//Stateless functional components
function ListContacts(props){
    return (
        <ol className="contact-list">
        {props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }}/>
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button onClick={() => props.onDeleteContent(contact)} className='contact-remove'>
                    Remove
                </button>
            </li>
        ))}
    </ol>
    )
}

/*
PropTypes is a package that lets us define the data type we want to see right from the get-go 
and warn us during development if the prop that's passed to the component doesn't match what is expected
*/
ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContent: PropTypes.func.isRequired
}

export default ListContacts