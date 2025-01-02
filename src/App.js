import './App.css';
import React from 'react';
import Main from './pages/main/Main';
// import Header from './pages/header/Header.jsx';
// import Content from './pages/content/Content.jsx';
// import Logos from './pages/logos/Logos.jsx';
// import AboutUs from './pages/aboutUs/AboutUs.jsx'
// import Footer from './pages/footer/Footer.jsx';
import {Routes, Route} from 'react-router-dom'
import Features from './pages/features/Features.jsx'

function App() {
  return (
    <Routes>
      <Route path='/'element= {<Main/>}/>
      <Route path='Features' element= {<Features/>}/>




      {/* <Route path='Header'element= {<Header/>}/>
      <Route path='Content'element= {<Content/>}/>
      <Route path='Logos'element= {<Logos/>}/>
      <Route path='AboutUs'element= {<AboutUs/>}/>
      <Route path='Footer'element= {<Footer/>}/> */}

    </Routes>
  
  );
}

export default App;
