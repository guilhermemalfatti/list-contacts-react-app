import React, { Component } from 'react'
import ListContacts from './ListContacts'

class App extends Component {
  //state components,  It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContact = (contact) =>{

    //if you need update the based on the current state, usa a funcationas a callback witha  parameter that is the current state
    this.setState((state) =>({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    //if you just need update the state use this way
    //this.setState({})

  }
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContent={this.removeContact}/>
      </div>
    )
  }
}

export default App;