import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
  //state components,  It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!
  state = {
    contacts : []
  }

  componentDidMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState({
        contacts: contacts
      })
    })
  }

  removeContact = (contact) =>{

    //if you need update the based on the current state, usa a funcationas a callback witha  parameter that is the current state
    this.setState((state) =>({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact).then((res)=>{
      console.log(res.name + " removed.")
    })

    //if you just need update the state use this way
    //this.setState({})

  }

  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  render() {
    return (
      <div>
          <Route exact path='/' render={() => (
              <ListContacts 
                contacts={this.state.contacts} 
                onDeleteContent={this.removeContact}/>
            )}
          />

        
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>
        
      </div>
    )
  }
}

export default App;