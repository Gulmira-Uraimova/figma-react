import React from 'react'
import './Logos.css'
import picture from '../../assets/MasterCard.svg'
import air from '../../assets/airbnb.svg'
import uber from '../../assets/Uber.svg'
import pay from '../../assets/PayPal.svg'
import visa from '../../assets/Visa.svg'
import stripe from '../../assets/Stripe.svg'

const Logos = () => {
  return (
    <div className='logos'>
      <h2>Trusted by 20,000+ companies</h2>
      <div className='logos__content'>
        <img src={picture} alt="error" />
        <img src={air} alt="error" />
        <img src={uber} alt='error'/>
        <img src={pay} alt='error'/>
        <img src={visa} alt='error'/>
        <img src={stripe} alt='error'/>
      </div>
    </div>
  )
}

export default Logos