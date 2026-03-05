
import React from 'react'

export const List =React.memo(({name , addToCart }) => {
 console.log(`${name} prod comp re-rendered`)
  return (
    <div className='product'>
      <h1>{name}</h1>
      
      <button onClick={addToCart}>AddtoCart</button>
    </div>
  )
})


