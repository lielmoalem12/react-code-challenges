import { useReducer } from "react";

const initialState = {
  number1: 0,
  number2: 0,
  result: "no result",
};

function reducer(state, action) {
  if (action.type === "SET_NUMBER_1") {
    return { ...state, number1: action.payload };
  }
  if (action.type === "SET_NUMBER_2") {
    return { ...state, number2: action.payload };
  }
  if (action.type === "ADD") {
    return {
      ...state,
      result: state.number1 + state.number2,
    };
  }

  if (action.type === "SUBTRACT") {
    return {
      ...state,
      result: state.number1 - state.number2,
    };
  }

  if (action.type === "CLEAR") {
    return {
      number1: 0,
      number2: 0,
      result: "no result",
    };
  }
  return state;
}

export default function SimpleCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <>
            <button
              key={number}
              onClick={() =>
                dispatch({ type: "SET_NUMBER_1", payload: number })
              }
            >
              {number}
            </button>
          </>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_NUMBER_2", payload: number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      </div>
      <div>
        <h2>{`Result: ${state.result != "no result" && state.result}`}</h2>
      </div>
    </div>
  );
}
