import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

const Home = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    //  console.log(event.target.value)

    const { name, value } = event.target;

    setInput((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
  };
  console.log(input);
  // useEffect(() => { 
  //   console.log(input)
  // },[input])
  return (
    <div>
      {/* <Navbar/> */}
      <h1 style={{ display: "flex", justifyContent: "center" }}>Home</h1>

      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="age">age</label>
      <br />
      <input
        type="number"
        name="age"
        value={input.age}
        id="age"
        onChange={handleChange}
      />
      <br />

      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        value={input.email}
        id="email"
        onChange={handleChange}
      />
      <br />

      <label htmlFor="number">Contact</label>
      <br />
      <input
        type="number"
        name="contact"
        value={input.contact}
        id="number"
        onChange={handleChange}
      />
      <br />
      <button>Submit</button>
    </div>
  );
};

export default Home;
