import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Join from './Components/Join'
import StudentRegister from './Components/StudentRegister'
import TeacherRegister from './Components/TeacherRegister'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Teachers from './Components/Teachers'


// export const server = 'https://teach-me-backend.onrender.com'
export const server = 'http://localhost:5000'

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/join' element={<Join />} />
          <Route path='/studentregister' element={<StudentRegister />} />
          <Route path='/teacherregister' element={<TeacherRegister />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teachers' element={<Teachers />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App