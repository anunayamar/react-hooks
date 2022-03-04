import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
    </div>
  );
};

export default UseReducerDemo;
