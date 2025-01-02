import React from 'react'
import './Form.css'
import post from '../../assets/post.png'

const Form = () => {
  return (
    <section className='Form'>
        <h3>Subscribe to get the latest news about us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
        <div className='Form__inp'>
            <div className='Form__post'> 
                <img src={post} alt='error'/>
                <a href="#" style={{ textDecoration: 'none' }}>Enter your email</a>
            </div>
           
            <button className='Form__btn'>Register</button>
        </div>
    </section>
  )
}

export default Form