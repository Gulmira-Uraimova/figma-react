import React from 'react'
import './Features.css'
import AChair from '../../assets/AChair.png'
// import Chairs from '../../assets/Chairs.svg'
// import pedestal from '../../assets/pedestal.svg'
import rect from '../../assets/Rectangle 34.png'
import rectan from '../../assets/Rectangle 36.png'
import rectangle from '../../assets/Rectangle 38.png'
import loupe from '../../assets/loupe 1.png'
import group from '../../assets/Group.png'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram (3).png'
import Youtube from '../../assets/Youtube.svg'
import Row from '../../assets/Row.svg'

const Features = () => {
  return (

    <section>
         <nav className='header__f'>
            <h1>DudeShape</h1>
            <ul className='header__ul'>
                <li>Home</li>
                <li>About</li>
                <li class="header__a"onclick=''><a href="../features" style={{textDecoration: 'none' }}>Features</a></li>
                <li>Contact</li>
            </ul>
            <div>
               <img src={loupe} alt="error" className=''/>
               <img src={group} alt="error" /> 
            </div>
    
            
        </nav>



        <div className='Features'>
            <h1>
               Hello, this is a feature page!
            </h1>
            <div className='Features__header'>
               <img src={AChair} alt='error'/>
               <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
            </div>
        </div>

        <div className='popular'>
            <div>
                <h2 className='popular__text'>Our Popular Furniture</h2>
            </div>
            <div className='popular__img'>
                <img src={rect} alt='error'/>
                <img src={rectan} alt='error'/>
                <img src={rectangle} alt='error'/>
            </div>

        


            {/* <div className='Features__pictures'>
                <p>Our customers are very important to us</p>
                <img src={Chairs} alt='error'/>
            </div>

            <div className='Features__pictures'>
                <img src={pedestal} alt='error'/>
                <p>Our customers are very important to us</p>
            </div> */}
        
        </div>


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
    </section>

    
  )
}

export default Features