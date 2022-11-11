import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from '../components/Home';


import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const MainRoute = () => {
  return (
    <div>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
 
   </Routes>
    </div>
  )
}
