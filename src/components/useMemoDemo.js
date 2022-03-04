import React, { useMemo, useState } from "react";

const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //Following commented code is slow
  //const doubleNumber = slowFunction(number);

  //Following code with useMemo is fast, because the result for the number is cached
  //So, when we click on the change theme button the slowFunction is not called because the number
  // has not changed and the result is cached
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const themStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <React.Fragment>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() =>
          setDark((prevDark) => {
            return !prevDark;
          })
        }
      >
        Change Theme
      </button>
      <div style={themStyles}>{doubleNumber}</div>
    </React.Fragment>
  );
};

const slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};

export default UseMemoDemo;
