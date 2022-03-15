import { useState } from 'react'
import logo from './logo.svg'
import { NavLink, Route,Routes } from 'react-router-dom';
import HomePage from './conponents/Home';
import ProductPage from './conponents/Product';
function App() {
  const [count, setCount] = useState(0)
  const [myName,setMyName] = useState("Khuat Thanh Long");
  const [myAge,setAge] = useState(18)
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/products' element = {<ProductPage/>}/>
            <Route path='/about' element = {<h1>abou page</h1>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
