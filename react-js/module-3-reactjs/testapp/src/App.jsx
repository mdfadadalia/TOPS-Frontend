import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './btn.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<Btn />	
     <h1>Hello World </h1>
	<Btn />	
	 <h1>Hello World </h1>
	 <Btn />	
    </>
  )
}

export default App
