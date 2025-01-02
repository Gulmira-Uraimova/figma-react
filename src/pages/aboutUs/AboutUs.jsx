import React from 'react'
import photo from '../../assets/Sofa.svg'
import shield from '../../assets/shield 3.svg'
import './AboutUs.css'
import guarant from '../../assets/guarantee 1.svg'
import free from '../../assets/Group 8981 (1).svg'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <img src={photo} alt='error'/>
        <div className='aboutUs__contents'>
            <h3>About Us</h3>
            <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
            <div className='aboutUs__content'>
                <img src={shield} alt='error'/>
                <div className='aboutUs__best'>
                   <h4>Best Quality</h4>
                   <p>All of our furniture uses the best materials and choices</p>
                </div>
            </div>
            <div className='aboutUs__content'>
                <img src={guarant} alt='error'/>
                <div className='aboutUs__secure'>
                    <h4>100% Secure</h4>
                    <p>All of our furniture uses the best materials and choices</p>
                </div>
            </div>
            <div className='aboutUs__content'>
                <img src={free} alt="error" />
                <div className='aboutUs__free'>
                    <h4>Free Shpping</h4>
                    <p>All of our furniture uses the best materials and choices</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutUs