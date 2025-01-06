import React from 'react';
import './Main.css';
import Header from '../header/Header';
import Content from '../content/Content';
import Logos from '../logos/Logos';
import AboutUs from '../aboutUs/AboutUs';
import Slider from '../slider/Slider';
import Furniture from '../furniture/Furniture';
import Customers from '../customers/Customers';
import Form from '../form/Form';
import Footer from '../footer/Footer';


const Main = () => {
  return (
    <div className='main'>
      <Header/>
      <Content/>
      <Logos/>
      <AboutUs/> 
      <Slider/> 
      <Furniture/>
      <Customers/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Main