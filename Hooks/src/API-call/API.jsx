import React from 'react'

const API = () => {

    async function apicall() {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        console.log(response)
    };

  return (
    <div>
        <h2>Joke api</h2>
        <button onClick={apicall}>Api Call</button>
    </div>
  )
}
 
export default API 