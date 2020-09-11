import React, { Component } from 'react';
import './App.css';
import appCss from './App.module.css';
// import personCss from '../components/Persons/Person/Person.module.css';
// import '../components/Persons/Person/Person.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'





class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons:false
  }

  deletePersonHandler =(personIndex)=>{

    // const persons=this.state.persons;

    // const persons=this.state.persons.slice();

    //spread operator
    const persons =[...this.state.persons];

    persons.splice(personIndex,1);

    this.setState({persons:persons});

  }

  nameChangedHandler = (event, id) => {

    const personIndex= this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person ={
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }

  togglePersonsHandler =()=>{

    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

 
  render () {

    const btnClass=[appCss.Button];
    let persons = null;

    if (this.state.showPersons){
      persons =(
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} 
          />
        </div> 

        
      );
        
      btnClass.push(appCss.Red);
    }




    return (

      <div className="App">
        <Cockpit 
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          />
        {persons}    
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
