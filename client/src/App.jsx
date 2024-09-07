import { useState } from 'react'
import Signup from './Singup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './Login'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
