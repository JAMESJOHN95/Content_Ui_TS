import { useState } from 'react'
import Header from './Componants/Header'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Templates from './Pages/Templates'
import Layout from './Pages/Layout'
import Home from './Componants/Home'
import ExistingDetails from './Pages/ExistingDetails'
import NewTemplate from './Pages/NewTemplate'
import TemplateEditing from './Pages/TemplateEditing'
import { TokenProvider } from './Componants/TokenContext'

function App() {


  return (
    <>
      <Header/>
        <TokenProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/templates' element={<Templates />}/>
            <Route path='/existingcontents' element={<ExistingDetails />} />
            <Route path='/newtemplate' element={<NewTemplate />} />
            <Route path='/templateEditing' element={<TemplateEditing/>} />
            {/* <Route path='/home' element={<Home/>}/> */}
          </Routes>
        </TokenProvider>
      </>
  )
}

export default App
