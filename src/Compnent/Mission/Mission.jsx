import React from 'react'
import './Mission.css'
import vision from '../Assats/landing2.jpg'
import manif from '../Assats/landing4.jpg'

const Mission = () => {
  return (
    <div className="proccess-main">
    <div className="proccess">
      <div className="proccess-2">
      <h3>Our Vision </h3>
      <p>
      "Our mission at Marha & Co. is to provide comprehensive audit and due diligence services that empower businesses to make informed, strategic decisions. We are dedicated to maintaining the highest standards of integrity, accuracy, and confidentiality in every engagement."

"At Marha & Co. we strive to be the trusted partner for businesses seeking meticulous audit and due diligence solutions. Our mission is to deliver insightful, transparent, and reliable assessments that enhance our clients' confidence and drive sustainable growth."


      </p>
      </div>
      <div className="proccess-1">
      <img src={vision} alt=""/>
      </div>
    
    </div>

{/*- section2-*/}
<div className="proccess">
    
      <div className="proccess-1">
      <img src={manif} alt="" />
      </div>
      <div className="proccess-2">
        <h3>Our Mission</h3>
      <p>
      At Marha & Co. our mission is to empower businesses with precise insights and robust due diligence, ensuring transparency, compliance, and strategic growth. We are committed to delivering unparalleled audit services that foster trust and integrity, guiding our clients through complex financial landscapes with expertise and unwavering dedication."
      </p>
      </div>
    
    </div>

  </div>
  )
}

export default Mission
