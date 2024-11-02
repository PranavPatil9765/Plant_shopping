import React from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate()
  return <>
  
    <div className="landing-background"></div>
    <div className="landing-text">
      <div className="left-text">
      <h1>Welcome to Your Plant Care App</h1>
      <p>Discover the best gardening tools and tips for your plants.</p>
      <button className="product-button" onClick={()=>{navigate('/Shopping')}}>Get Started</button>

      </div>
      <div className="right-text">
        <h1>Welcome to the Paradise Nursery</h1>
        <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of 
        high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and 
        more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every 
        plant enthusiast.
        <br />
        Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
        Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
        the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
        home or office.
        <br />
        Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the 
        beauty of nature right at your doorstep.
        </p>
      </div>
    </div>
  
  </>
}

export default LandingPage