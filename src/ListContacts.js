import React from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

//State components
class ListContacts extends React.Component{
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContent: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    render() {
        const { contacts, onDeleteContent}  = this.props
        const {query} = this.state

        let showingContacts
        if (query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingContacts = contacts.filter((contact) => match.test(contact.name))
        } else {
            showingContacts = contacts
        }
        showingContacts.sort(sortBy('name'))

        return (
            <div className='list-contacts'>
                <div className='list-contacs-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search contacts'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                    <span>Now showing {showingContacts.length} of {contacts.length} total</span>
                    <button onClick={this.clearQuery}>Show all</button>
                  </div>
                )}

                <ol className="contact-list">
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => onDeleteContent(contact)} className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
            
        )
    }

}



//-----------------------------------------------------
//Stateless functional components
function ListContacts_old(props){
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
ListContacts_old.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContent: PropTypes.func.isRequired
}

export default ListContacts