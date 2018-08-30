import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component{
  render(){
    const people = this.props.contact;

    return <ol>
        {people.map(person =>(
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <ContactList contact={[
        {name: 'gui'},
        {name: 'gustavo'},
        {name: 'bruno'},
      ]}/>
      <ContactList contact={[
        {name: 'pedro'},
        {name: 'joao'},
        {name: 'felipe'},
      ]}/>
      </div>
    );
  }
}

export default App;
