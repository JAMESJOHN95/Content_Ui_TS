import { useState } from 'react'
import Header from './Componants/Header'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Templates from './Pages/Templates'
import Layout from './Pages/Layout'
import Home from './Componants/Home'
import ExistingDetails from './Pages/ExistingDetails'
import NewTemplate from './Pages/NewTemplate'

function App() {


  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashoard' element={<Dashboard />} />
          <Route path='/templates' element={<Templates />}/>
          <Route path='/existingcontents' element={<ExistingDetails />} />
          <Route path='/newtemplate' element={<NewTemplate />} />
          {/* <Route path='/home' element={<Home/>}/> */}
        </Routes>
      </>
  )
}

export default App
