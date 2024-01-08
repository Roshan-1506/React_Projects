import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero container'>
    <div className='hero-content'>
    <div>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.  </p>
        </div>
        
        <div className='hero-btn'>
        <button className='primary-btn'>Shop Now</button>
        <button className='secondary-btn'> Category </button>
        </div>
        <div className='shopping'>
         <p>Also Available On</p>
        </div>
        <div className='brand-icons'>
            <img src='./images/flipkart.png' alt='flipkart'/>
            <img src='./images/amazon.png' alt='amazon'/>
        </div>
    </div>  

    <div className='hero-image'>
    <img src='./images/shoe_image.png' alt='shoeimg'/>  


    </div>


    </main>
  )
}

export default HeroSection;