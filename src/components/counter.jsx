import React, { Component } from "react";

export default class Counter extends Component {
  // This method runs after a component updates
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
    // This checks if the counter value has changed, and performs an Ajax call to get new data
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  // This method runs when the component is unmounted from the DOM
  componentWillUnmount() {
    console.log("Counter Unmount");
  }

  // This method renders the Counter component
  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        {/* This displays the count value */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* This button calls the onIncrement prop function */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* This button calls the onDelete prop function */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // This method gets the badge classes based on the count value
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    if (this.props.counter.value === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }
    return classes;
  }

  // This method formats the count value to display "Zero" for zero counts
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
