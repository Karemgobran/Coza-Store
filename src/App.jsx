import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Login } from './components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginContext } from './Context/Login/Login'
import { Profile } from "./components/Profile/Profile"
import { Signup } from './components/Sigup/Signup'

function App() {
  const [userName, setuserName] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ userName, setuserName, isLoggedIn, setIsLoggedIn }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/ff' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  )
}

export default App
