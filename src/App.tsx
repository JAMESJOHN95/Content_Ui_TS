import { FC } from 'react';
import React from "react"
import Header from './Componants/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Templates from './Pages/Templates';
import ExistingDetails from './Pages/ExistingDetails';
import NewTemplate from './Pages/NewTemplate';
import TemplateEditing from './Pages/TemplateEditing';
import { TokenProvider } from './Componants/TokenContext';
import Publish from './Pages/Publish';
import Recommendations from './Pages/Recommendations';
import Home from './Componants/Home';

const App: FC = () => {
  return (
    <>
      <Header />
      <TokenProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/existingcontents" element={<ExistingDetails />} />
          <Route path="/newtemplate" element={<NewTemplate />} />
          <Route path="/templateEditing" element={<TemplateEditing />} />
          <Route path="/Publish" element={<Publish />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </TokenProvider>
    </>
  );
};

export default App;
