import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1> Hi I'm a react app</h1>
        <p> This is really working </p>
        <Person name="Argie" age="24">My Hobbies: playing games</Person>
        <Person name="Razel" age="23"/>
        <Person name="Angiely" age="18"/>
      </div>
    );
  }

}

export default App;
