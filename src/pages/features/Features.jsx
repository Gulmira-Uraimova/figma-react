import React from 'react'
import './Features.css'
import Rect from '../../assets/Rectangle 34.png'
import Rectang from '../../assets/Rectangle 36.png'
import Rectangle from '../../assets/Rectangle 38.png'
import loupe from '../../assets/loupe 1.png'
import group from '../../assets/Group.png'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram (3).png'
import Youtube from '../../assets/Youtube.svg'
import Row from '../../assets/Row.svg'
import Heart from '../../assets/heart.png'
import Share from '../../assets/Share.png'
import Heart2 from '../../assets/Heart2.png'

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
            <div className='header__group'>
               <img src={loupe} alt="error" className=''/>
               <img src={group} alt="error" /> 
            </div>
    
            
        </nav>


      
         < div className='Feature__slides'>
                    <div className='Slider__cards'>
                        <img src={Rectangle} alt='error'/>
                        <div className='Slider__card'>
                            <p>White Swan Chair </p>
                            <img src={Heart} alt='error' className='Slider__heart'/>
                            <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                            <p className='forty'>$40</p>
                            <button className='Slider__btn'>Buy Now</button>
                        </div>
                            
                    </div>
                    <div className='Slider__cards'>
                        <img src={Rectang} alt='error'/>
                        <div className='Slider__card'>
                               <p>White Swan Chair</p>
                               <img src={Heart2} alt='error'className='Slider__heart'/>
                               <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                               <p className='forty'>$40</p>
                               <button className='Slider__btn'>Buy Now</button>
                        </div>
                            
                    </div>
                    
                    <div className='Slider__cards'>
                        <img src={Rect} alt='error'/>
                        <div className='Slider__card'>
                            <p>White Swan Chair</p>
                            <img src={Heart2} alt='error'className='Slider__heart'/>
                            <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                            <p className='forty'>$40</p>
                            <button className='Slider__btn'>Buy Now</button>
                        </div>
        
                    </div>
                </div>


                < div className='Feature__slides'>
                    <div className='Slider__cards'>
                        <img src={Rectangle} alt='error'/>
                        <div className='Slider__card'>
                            <p>White Swan Chair </p>
                            <img src={Heart} alt='error' className='Slider__heart'/>
                            <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                            <p className='forty'>$40</p>
                            <button className='Slider__btn'>Buy Now</button>
                        </div>
                            
                    </div>
                    <div className='Slider__cards'>
                        <img src={Rectang} alt='error'/>
                        <div className='Slider__card'>
                               <p>White Swan Chair</p>
                               <img src={Heart2} alt='error'className='Slider__heart'/>
                               <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                               <p className='forty'>$40</p>
                               <button className='Slider__btn'>Buy Now</button>
                        </div>
                            
                    </div>
                    
                    <div className='Slider__cards'>
                        <img src={Rect} alt='error'/>
                        <div className='Slider__card'>
                            <p>White Swan Chair</p>
                            <img src={Heart2} alt='error'className='Slider__heart'/>
                            <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                            <p className='forty'>$40</p>
                            <button className='Slider__btn'>Buy Now</button>
                        </div>
        
                    </div>
                </div>

                < div className='Feature__slides'>
                    <div className='Slider__cards'>
                        <img src={Rectangle} alt='error'/>
                        <div className='Slider__card'>
                            <p>White Swan Chair </p>
                            <img src={Heart} alt='error' className='Slider__heart'/>
                            <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                            <p className='forty'>$40</p>
                            <button className='Slider__btn'>Buy Now</button>
                        </div>
                            
                    </div>
                    <div className='Slider__cards'>
                        <img src={Rectang} alt='error'/>
                        <div className='Slider__card'>
                               <p>White Swan Chair</p>
                               <img src={Heart2} alt='error'className='Slider__heart'/>
                               <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                               <p className='forty'>$40</p>
                               <button className='Slider__btn'>Buy Now</button>
                        </div>
                            
                    </div>
                    
                    <div className='Slider__cards'>
                        <img src={Rect} alt='error'/>
                        <div className='Slider__card'>
                            <p>White Swan Chair</p>
                            <img src={Heart2} alt='error'className='Slider__heart'/>
                            <img src={Share} alt='error'/>
                        </div>
                        <div className='Slider__card'>
                            <p className='forty'>$40</p>
                            <button className='Slider__btn'>Buy Now</button>
                        </div>
        
                    </div>
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
          <hr className='Footer__hr'/>
          <p className='Footer__end'>Copyright @ 2021. Crafted with love.</p>
        </footer>
    </section>

    
  )
}

export default Features