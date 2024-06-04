import {React, useState ,useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Components/Search'
import Shelf from './Components/Shelf';

function App() {
  
  

  return (
    
      <Router>
      <Routes>
        <Route  path="/" element={<Search/>} />
        <Route path="/bookshelf" element={<Shelf/>} />
      </Routes>
    </Router>
    
  )
}

export default App
