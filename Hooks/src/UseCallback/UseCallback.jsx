import React, { useCallback, useState } from "react";
import { List } from "./List";

export const UseCallback = () => {
  const [prod, setProd] = useState(["product 1", "product 2"]);
  const [count , setCount] = useState(0)
  const [cart, setCart] = useState(0)
         
  const addToCart = useCallback(() => {
   
    setCart((s)=> s+1)
    console.log(cart)
  },[cart])
  return (
    <> 
     
        <h3>count: {count} </h3>
        <h3>Cart : {cart}</h3>
        <button onClick={() => setCount((c)=> c+1)}> + count </button>
      <div className="prod-wrapper">
        {prod.map((p ,i ) => {
          return <List name = {p}  addToCart={addToCart} key={i} />;
        })}
      </div>
    </>
  );
};

export default UseCallback
