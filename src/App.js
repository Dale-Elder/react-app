// Importing necessary packages and components
import React, { Component } from "react";
import NavBar from "./components/navbar"; // Importing NavBar component
import Counters from "./components/counters"; // Importing Counters component

// Defining App component
export default class App extends Component {
  // Defining initial state of counters array
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Constructor is called when component is first created
  constructor() {
    super();
    console.log("App - Constructor"); // Logging when constructor is called
  }

  // componentDidMount is called after the component is mounted
  componentDidMount() {
    console.log("App - Mounted"); // Logging when component is mounted
    // Ajax Call can be made here
  }

  // Incrementing the value of a counter
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // Creating a copy of the counters array
    const index = counters.indexOf(counter); // Finding the index of the counter to be updated
    counters[index] = { ...counter }; // Creating a copy of the counter object at the specified index
    counters[index].value++; // Incrementing the value of the counter object
    this.setState({ counters }); // Updating the state with the new counters array
  };

  // Resetting the values of all counters
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0; // Resetting the value of each counter object
      return c;
    });
    this.setState({ counters }); // Updating the state with the new counters array
  };

  // Deleting a counter
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId); // Creating a new array of counters without the specified counter object
    this.setState({ counters }); // Updating the state with the new counters array
  };

  // The render method returns the JSX to be rendered on the page
  render() {
    console.log("App - Rendered"); // Logging when the component is rendered

    // Returning the JSX for the NavBar and Counters components
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length} // Passing the total number of counters with a value greater than 0 to the NavBar component
        />
        <main className="container">
          <Counters
            counters={this.state.counters} // Passing the counters array to the Counters component
            onReset={this.handleReset} // Passing the handleReset method to the Counters component
            onIncrement={this.handleIncrement} // Passing the handleIncrement method to the Counters component
            onDelete={this.handleDelete} // Passing the handleDelete method to the Counters component
          />
        </main>
      </>
    );
  }
}
