import React, { useReducer } from "react";
const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "Increment":
      return (currentState + 1);
    case "Decerement":
      return (currentState - 1);
    case "Reset":
      return initialState;
    default:
      return currentState;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{`counter value -- ${count}`}</h1>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("Decerement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("Reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
