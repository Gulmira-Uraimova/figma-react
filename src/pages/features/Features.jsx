import React, { useEffect, useState } from 'react'
import Heart from '../../assets/heart.png'
import Heart2 from '../../assets/Heart2.png'
import Rect from '../../assets/Rectangle 34.png'
import Rectang from '../../assets/Rectangle 36.png'
import Rectangle from '../../assets/Rectangle 38.png'
import Share from '../../assets/Share.png'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import axios from 'axios'
import './Features.css'

const Features = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products')
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])
    

	return (
		<section>
			<Header />
			<div className='Feature__slides'>
                {
                    products.map(product => (
                        <div className='Slider__cards'>
                            <img src={product.img} alt='error' />
                            <div className='Slider__card'>
                                <p>{product.title}</p>
                                {
                                    product.like ?  <img src={Heart2} alt='error' className='Slider__heart' /> : <img src={Heart} alt='error' className='Slider__heart' />
                                }
                                <img src={Share} alt='error' />
                            </div>
                            <div className='Slider__card'>
                                <p className='forty'>${product.price}</p>
                                <button className='Slider__btn'>Buy Now</button>
                            </div>
                        </div>
                    ))
                }
			</div>
			<Footer />
		</section>
	)
}

export default Features
