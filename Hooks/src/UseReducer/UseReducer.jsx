import React, {  useReducer, useState } from 'react'

function reducerFn(state ,action){
  switch(action.type){
    case "increament":
      return {count: state.count + 1};
      case "decreament" :
        return {count : state.count -1 };
        default:
        return state
  }
}



export const UseReducer = () => {
  const [state,dispatch] = useReducer(reducerFn , {count:0});
  
    //const [count, setCount] = useState(0)

    const increament = () => {
        //setCount((c) => c+1)
        dispatch({type : "increament"})
    }
    const decreament = () => {
        //setCount((c) => c-1)
        dispatch({type : "decreament"})
    }
  return (
    <div>
        <button onClick={decreament}>-</button>
        {state.count}
        <button onClick={increament}>+</button>
    </div>
  )
}
