import { useContext } from "react";
import {
  ThemeContext,
  ThemeUpdateContext,
} from "./contextProviders/themeContextProvider";

const UseContextDemo = () => {
  const darkTheme = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeUpdateContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      Hello from use context demo {darkTheme}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>This is the current theme</div>
    </>
  );
};

export default UseContextDemo;
