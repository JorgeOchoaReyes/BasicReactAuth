import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavigationBar } from './components/Navbar';
import { pages } from './components/pages'; 

function App() {
  return (
    <div> 
        <NavigationBar /> 
        <Routes>
          {pages.map(({path, component}) =>( <Route key={path} path={path} element={component} />))}
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
    </div>
  );
}

export default App;
