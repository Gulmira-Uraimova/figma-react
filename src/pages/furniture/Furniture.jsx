import React from 'react'
import './Furniture.css'
import Chairs from '../../assets/Chairs.svg'
import Living from '../../assets/living.png'
import Dining from '../../assets/Dining room.svg'
import Bed from '../../assets/Bedroom.svg'
import Office from '../../assets/Office green.svg'
import Kitchen from '../../assets/Kitchen.png'
import Hallway from '../../assets/Hallway.png'
// import font from  "link rel="preconnect" href="https://fonts.googleapis.com"">

const Furniture = () => {
  return (
    <section className='furniture'>
        <h2>All Furniture</h2>
        <div className='furniture__headline'>
            <p className='furniture__room'>Shop By Room</p>
            <p>Shop By Category</p>
            <p>Shop By Style</p>
        </div>
        <div className='furniture__content'>
            <img src={Chairs} alt='error'/>
            <div className='furniture__rooms'>
                <img src={Living} alt='error'/>
                <img src={Dining} alt='error'/>
                <img src={Bed} alt= 'error'/>
                <img src={Office} alt= 'error'/>
                <img src={Kitchen} alt= 'error'/>
                <img src={Hallway} alt= 'error'/>
            </div>
        </div>
    </section>
  )
}

export default Furniture