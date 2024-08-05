import React from 'react'
import './Enqurary.css'
import enqurary1 from '../Assats/contact2.jpg'
import enqurary2 from '../Assats/email.png'
import enqurary3 from '../Assats/phone-call.png'
import enqurary4 from '../Assats/location.png'


const Enqurary = () => {
  return (
    <div >
      <img src={enqurary1} alt="" className='eneurary-img' />
      <div className='enquiry'>
       <div className='enquiry-col'> 
        <h4>WE'RE HERE TO HELP</h4>
        
        <ul>
          <li><img src={enqurary2} alt="" /> marha.ventures@gmail.com</li>
          <li><img src={enqurary3} alt="" /> +919773771914</li>
          <li><img src={enqurary4} alt="" /> Tribhuvan ComplexNH-19, Friends Colony West, Ishwar Nagar, Bahapur, New Delhi, Delhi 110065
          </li>
        </ul>
       </div>
       <div className='enquiry-col'>
        <form>
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter your mobile no' required />
          <label>Write Your Massage Here</label>
          <textarea name="massage" rows="6" placeholder='Enter your massage' required></textarea>
          <button type='submit' className='btn dark-btn'>submit now</button>
        </form>
       </div>
       </div>
       <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4960269322614!2d77.3594593745093!3d28.614892184883235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54213bffdbf%3A0xb655b5092e1db9ee!2sMantec%20Tower!5e0!3m2!1sen!2sin!4v1717401812188!5m2!1sen!2sin"
        width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  )
}

export default Enqurary
