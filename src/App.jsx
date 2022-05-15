import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Dashboard} from "./Components/dashboard"
import {Home} from "./Components/Home"
import {AddCart} from "./Components/add_cart"
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/add_cart' element={<AddCart/>}/>
      </Routes>
    </div>
  )
}

export default App
