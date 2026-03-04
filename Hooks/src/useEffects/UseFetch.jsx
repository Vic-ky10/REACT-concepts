import  { useEffect, useState } from "react";

function UseFetch() {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);

  function handel() {
    setData(data + 1);
  }
  useEffect(() => {
    
    console.log(data)
  }, [data , data1]);

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={handel}> add</button>
      <h1>{data1}</h1>
      <button onClick={() => setData1(data1 + 1)}> add</button>
    </div>
  );
}

export default UseFetch;
