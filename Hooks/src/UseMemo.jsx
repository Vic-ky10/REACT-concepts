
// useMemo is a React Hook used to optimize performance by memorizing the result of expensive calculations. It recomputes the value only when its dependencies change, preventing unnecessary recalculations during component re-renders.

import { useState } from "react"

function UseMemo() {
  const [count, setCount] = useState(0)
  const [num , setNum] = useState(5)

  // const result = heavyCalculation()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}


export default UseMemo
