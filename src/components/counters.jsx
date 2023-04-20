import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered"); // logs when component is rendered

    // destructure the props
    const { onReset, counters, onDelete, onIncrement } = this.props;

    // JSX for the Counters component which includes a Reset button and Counter component for each counter object
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id} // unique key for each counter object
            onDelete={onDelete} // event handler for delete button
            onIncrement={onIncrement} // event handler for increment button
            counter={counter} // pass counter object as prop
          />
        ))}
      </div>
    );
  }
}

export default Counters; // export the Counters component
