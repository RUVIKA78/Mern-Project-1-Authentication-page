import React from 'react'
import SignUp from './SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/"element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App