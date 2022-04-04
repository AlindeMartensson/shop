import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";

import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import Cart from "./pages/Cart"
import SingleProduct from "./pages/SingleProduct"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"

import cartState from "./stores/shoppingCart/atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
  
 function App () {

  

  return (

    <div className="App">
      <header className="App-header">
        
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AllProducts" element={<AllProducts />}/>
            <Route path="/CartPage" element={<Cart />}/>
            <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Admin" element={<Admin/>} />
            
        </Routes>
      
      </header>
      
    </div>

    
  )
}





export default App
