import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
   
// let myObj = {
//   username : "Roshan",
//   age : 21
// }
 let newArr = [1,2,3]
  return (
     <>
    

       <Card username ="Roshani" btnText="click me" />
       <Card username ="Ronita" />
       
   
     </>

  )
}

export default App
