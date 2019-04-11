import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "43434", name: "Shivam", age: 26 },
      { id: "43435", name: "Akash", age: 28 },
      { id: "43436", name: "Sabari", age: 40 }
    ],
    otherState: "some other value"
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const togglestate = this.state.showPersons;
    this.setState({
      showPersons: !togglestate
    });
  };
  deletePersonHandler = personindex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personindex, 1);
    this.setState({
      persons: persons
    });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "black"
      };
    }
    return (
      <div className="App">
        <h1>Hi,I am React app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        <p>{persons}</p>
      </div>
    );
  }
}

export default App;
