import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)


  const addvalue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello Fermion Infotech !!!</h1>
      <h3> Counter Value : {counter}</h3>
      <button onClick={addvalue}>Add Value : {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value : {counter}</button>    
    </>
  )
}

export default App
