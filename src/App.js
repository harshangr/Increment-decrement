import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);

  function Increment(){
    setCount((count + 1))
  }

  function Decrement(){
    setCount((count - 1))
  }

  return (
    <>
    <div className="container">
      <h1>{count}</h1>
      <div className="btn-div">
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App;
