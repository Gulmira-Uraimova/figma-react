import React from 'react'
import './Slider.css'
import Rectangle from '../../assets/Rectangle 34.png'
import Rectang from '../../assets/Rectangle 38.png'
import Rect from '../../assets/Rectangle 36.png'
import Heart from '../../assets/heart.png'
import Share from '../../assets/Share.png'
import Heart2 from '../../assets/Heart2.png'

const Slider = () => {
  return (
    <section className='Slider'>
        <h2>Our Popular Furniture</h2>
        <p className='Slider__text'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
        < div className='Slider__slides'>
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
    </section>
  )
}

export default Slider