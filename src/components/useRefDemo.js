import { useRef, useState } from "react";

const UseRefDemo = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRefDemo;
