import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 2,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCounter: currentState.firstCounter + 1 };
    case "Decerement":
      return { firstCounter: currentState.firstCounter - 1 };
    case "Reset":
      return {firstCounter:initialState.firstCounter};
    default:
      return currentState;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{`counter value -- ${count.firstCounter}`}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decerement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterTwo;
