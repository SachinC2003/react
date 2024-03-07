import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const add =()=>{
    count=count+1
    if(count<21)
    {
      setCount(count)
    }
  }

  const remove =()=>{
    count=count-1
    if(count>-1)
    {
      setCount(count)
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      {count}
      <button onClick={add}>Add value</button>
      <button onClick={remove}>Remove value</button>
    </>
  )
}

export default App
