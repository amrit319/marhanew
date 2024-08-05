import React from 'react'
import './About.css'
import aboutus from '../Assats/landing5.jpg'

const Abouts = () => {
  return (
    <div className='about-bg'>
    <img src={aboutus} alt=""  />
   {/* <h1>ABOUT US</h1>*/}
   <div className="about1">
   <div className="about">
         <b>ABOUT US</b>
         
         <p>
         At Marha & Co., we specialize in delivering top-tier audit and due diligence services that empower businesses to make informed decisions with confidence. Our team of experienced professionals is dedicated to upholding the highest standards of integrity, accuracy, and confidentiality in every engagement. We partner with our clients to navigate the complexities of financial landscapes, ensuring transparency and fostering sustainable growth. Trust Marha & Co. to be your reliable ally in achieving financial clarity and compliance
</p>
         </div>  
   </div>
   </div>
  )
}

export default Abouts
