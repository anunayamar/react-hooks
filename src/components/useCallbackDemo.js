import { useCallback, useState } from "react";
import UseCallbackDemoHelper from "./useCallbackDemoHelper";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    width: "200px",
    height: "200px",
  };

  const getList = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  return (
    <>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={theme}></div>
      <UseCallbackDemoHelper getList={getList} />
    </>
  );
};

export default UseCallbackDemo;
