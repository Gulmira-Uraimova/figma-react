import React from 'react'
import './Customers.css'
import pedestal from '../../assets/pedestal.svg'
import ellipse from '../../assets/Ellipse 28.svg'
import frame from '../../assets/Frame 92.png'

const Customers = () => {
  return (
    <div className='Customers'>
        <img src={pedestal} alt='error'/>
        <div className='Customers__content'>
            <h2>Our customers are very important to us</h2>
            <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
            <div className='Customers__star'>
                <img src={ellipse} alt='error'/>
                <img src={frame} alt='error'/>
            </div>
        </div>

    </div>
  )
}

export default Customers