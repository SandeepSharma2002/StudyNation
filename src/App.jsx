import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PrivateRoute from "./components/PrivateRoute"
import Course from "./pages/Courses"
import Footer from "./components/Footer"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="font-Poppins w-screen h-full min-h-screen bg-Solitude flex flex-col">
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
      <Routes>
        <Route path="/" element= {<Home isLoggedIn ={isLoggedIn}/>}/>
        <Route path="/signup" element = {<Signup setIsLoggedIn = {setIsLoggedIn} />}/>
        <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/dashboard" element= {<PrivateRoute isLoggedIn ={isLoggedIn} ><Dashboard/></PrivateRoute>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/courses" element= {<Course/>}/>
        <Route path="/contact" element= {<Contact/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App
