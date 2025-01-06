import './App.css';
import React from 'react';
import Main from './pages/main/Main';
import {Routes, Route} from 'react-router-dom'
import Features from './pages/features/Features.jsx'

function App() {
  return (
    <Routes>
      <Route path='/'element= {<Main/>}/>
      <Route path='Features' element= {<Features/>}/>
    </Routes>
  
  );
}

export default App;
