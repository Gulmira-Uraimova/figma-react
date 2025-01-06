import React from 'react'
import './Form.css'
import post from '../../assets/post.png'

const Form = () => {
  return (
    <section className='Form'>
        <h3>Subscribe to get the latest news about us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
        <div className='form__inp_block'>
            <label>
              <img src={post} alt='error' className='form__inp_icon' />
            </label>
            <input type="text" className='form__inp' placeholder='Enter your email' />
            <button className='Form__btn'>Register</button>
        </div>
    </section>
  )
}

export default Form