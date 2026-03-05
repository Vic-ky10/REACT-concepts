// useMemo is a React Hook used to optimize performance by memorizing the result of expensive calculations. It recomputes the value only when its dependencies change, preventing unnecessary recalculations during component re-renders.

import { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 10]);

  const max = useMemo(() => {
  console.log("changing value")
   return Math.max(...arr)
},[arr])
  return (
    <>
      <h1>count: {count}</h1>
      <p>{max}</p> 
      <p>{JSON.stringify(arr)}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setArr(
      [...arr, Math.round(count * Math.random())]
       )}>Add to Arr</button>
    </>
  );
}

export default UseMemo;
