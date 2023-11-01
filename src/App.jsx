import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Join from './Components/Join'
import StudentRegister from './Components/StudentRegister'
import TeacherRegister from './Components/TeacherRegister'
import Footer from './Components/Footer'


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
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App