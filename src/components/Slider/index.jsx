import React from 'react'
import { useState } from "react";

// import Cards from '../Cards'

function Slider() {
  const [count, setCount] = useState(0)
  const increase = ()=>{

  setCount( count+1)
};

const decrease = ()=>{

  setCount(count-1)
};
  
   
  return (
    <div>

        <button onClick={increase}>Increrase</button>
        <h1>{count}</h1>
        <button onClick={decrease}>Decrase</button>


          
    </div>
  )}


export default Slider