import React from 'react'
import './Footer.css'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram (3).png'
import Youtube from '../../assets/Youtube.svg'
import Row from '../../assets/Row.svg'


const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__content'>
        <div className='Footer__sm'>
          <h3>DudeShape</h3>
          <p className='Footer__lorem'>Lorem ipsum dolor sit amet, conse
           ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .</p>
          <h3 className='Footer__follow'>Follow Us :</h3>

        <div className='Footer__icons'>
          <img src={Facebook} alt='error'/>
          <img src={Twitter} alt='error'/>
          <img src={Instagram} alt='error'/>
          <img src={Youtube} alt='error'/>
        </div>
      </div>


      <div className='Footer__tour'>
        <h3>Take a tour</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Product</p>
          <p>Support</p> 
      </div>


      <div className='Footer__company'>
        <h3>Our company</h3>
        
          <p>About Us</p>
          <p>Blog</p>
          <p>Media</p>
          <p>Contact Us</p> 
      </div>


      <div className='Footer__subs'>
        <h3>Subscribe</h3>
        <p>Subscribe to get the latest news from us</p>
        <div className='Footer__email'>
          <p>Email Address</p>
          <img src={Row} alt='error'/>
        </div>
      </div>
    </div>
      <hr className='hr'/>
      <p className='Footer__end'>Copyright @ 2021. Crafted with love.</p>
    </footer>
  )
}

export default Footer