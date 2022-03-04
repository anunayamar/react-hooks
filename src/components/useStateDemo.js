import { useState } from "react";
import { Label, UseStateThemeContainer } from "../styling/useStateDemo.style";

const UseStateDemo = () => {
  //In every render useState is called, let's say if you are doing some computation to get 4,
  //you can pass a function to useState and it would only be called on the 1st render
  //Also, don't worry during re-render useState doesn't read 4, it reads the updated value of the counter
  //const [counter, setCounter] = useState(4);
  const [state, setState] = useState({
    counter: 4,
    theme: "Green",
    message: "All good",
  });

  //Note, how we are increasing the counter. We are passing passing prevState and decrementing it
  const decrement = () => {
    setState((prevState) => {
      const count = prevState.counter - 1;
      if (count <= 1) {
        return {
          counter: count,
          theme: "Red",
          message: "Counter zero or less",
        };
      }
      return { counter: count, theme: "Green", message: "All good" };
    });
  };

  const increment = () => {
    setState((prevState) => {
      const count = prevState.counter + 1;
      if (count <= 1) {
        return {
          counter: count,
          theme: "Red",
          message: "Counter zero or less",
        };
      }
      return { counter: count, theme: "Green", message: "All good" };
    });
  };

  return (
    <UseStateThemeContainer theme={state.theme}>
      <Label>{state.message}</Label>
      <button onClick={decrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={increment}>+</button>
    </UseStateThemeContainer>
  );
};

export default UseStateDemo;
