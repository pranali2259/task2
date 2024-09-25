import { useState } from 'react'
import Home from './Home'
import About from './About'
 import { Link,Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
     <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/About'>About</Link>
          </li>
          </ul>
          </nav>  
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
          </Routes>
    </>
  )
}

export default App
