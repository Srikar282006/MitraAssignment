import { useState } from 'react'
import {BrowserRouter  as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Toaster } from "react-hot-toast";

function App() {


  return (
    <>
            <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
  </Router>
 <Toaster position="top-right" />
    </>
  )
}

export default App
