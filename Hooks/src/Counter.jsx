import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter Updated", count);
    return () => {
      console.log("Cleaninh Running");
    };
  }, [count]);
  return (
    <div>
    
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

export default Counter;
