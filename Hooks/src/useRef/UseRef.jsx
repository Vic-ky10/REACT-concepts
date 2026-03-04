import { useState, useRef, useEffect } from "react";

function UseRef() {
  const [input, setInput] = useState(" ");
  const inputRef = useRef("");



  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  const display = () => {
    console.log(inputRef.current);
  };

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <p>My name is {input} </p>
    
      <button onClick={display}>Show input </button>
    </div>
  );
}

export default UseRef;
