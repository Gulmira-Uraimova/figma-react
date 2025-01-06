import React from 'react'
import AChair from '../../assets/AChair.png'
import './Content.css'

const Content = () => {
  return (
    <section className='content'>
       <img src= {AChair} alt="error" />
       <div>
        <h2>We Help You Make Modern Furniture</h2>
        <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
        <button className='content__btn'>Explore More</button>
       </div>
    </section>
  )
}

export default Content