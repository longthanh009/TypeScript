import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './conponents/showInfor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ShowInfo name="Long" age={20}/>
    </div>
  )
}

export default App
