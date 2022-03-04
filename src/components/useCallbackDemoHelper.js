import { useEffect } from "react";

const UseCallbackDemoHelper = ({ getList }) => {
  useEffect(() => {
    console.log("In use effect");
  }, [getList]);

  console.log(getList());
  return (
    <>
      {getList().map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default UseCallbackDemoHelper;
