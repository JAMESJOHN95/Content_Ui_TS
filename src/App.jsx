import { useState } from 'react'
import Header from './Componants/Header'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Templates from './Pages/Templates'
import Layout from './Pages/Layout'
import Home from './Componants/Home'

function App() {


  return (
    <>
      
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/dashoard' element={<Dashboard />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </>
  )
}

export default App
