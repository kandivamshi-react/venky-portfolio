import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cmsproject from './Projects/Cms'
import About from './Projects/About'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/cms" element={<Cmsproject/>} />
        <Route path='/about' element= {<About/>} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
