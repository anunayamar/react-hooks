import { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <div>
        {items.map((item) => (
          <div>{JSON.stringify(item)}</div>
        ))}
      </div>
    </div>
  );
};

export default UseEffectDemo;
