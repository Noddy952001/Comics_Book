import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Dashboard} from "./Components/dashboard"
import {Home} from "./Components/Home"
import {AddCart} from "./Components/add_cart"
import {Routes , Route} from "react-router-dom"
import {Checkout} from "./Components/checkout"
import { Login } from './Components/login'
import {Register} from "./Components/signup"

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="login" element={<Login/>}/>
        <Route path='/signup' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/add_cart' element={<AddCart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

      </Routes>
    </div>
  )
}

export default App
