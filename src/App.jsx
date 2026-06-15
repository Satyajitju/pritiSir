import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import People from './components/People';
import Courses from './components/Courses';
import Students from './components/Students';
import Books from './components/Books';


function App() {
  return (
    <div className="d-flex flex-column flex-lg-row flex-md-row">
      <div className="col-lg-2">
        <SideBar />
      </div>
      <div className="col-lg-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<People />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/books" element={<Books />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default App
