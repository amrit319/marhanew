import React from 'react'
import './Footer.css'
import whatshap from '../Assats/whatsapp_4423697.png'
import facebook from '../Assats/message.png'
import instra from '../Assats/instagram_174855.png'
import twiter from '../Assats/twitter2.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-main'>
    <div className="footer">

<div className="col">
<h3>Office</h3>
Tribhuvan ComplexNH-19,<br /> Friends Colony West,<br /> Ishwar Nagar, Bahapur,<br /> New Delhi, Delhi 110065
<br /><br />
+91-9773771914
</div>
<div className="col">
<h3>Link</h3>
<ul>
    <li><Link  to='/'>Home</Link></li>
    <li >  <Link  to='/About'>About</Link></li>
    <li><Link to='/Sarvice'>Service</Link> </li>
    <li >  <Link  to='/Contect'>Contact</Link></li>  
    
</ul>
</div>
<div className="col">
<h3>Social Media</h3>
<div className='media'>
<a href=" https://wa.me/919773771914?=Hello How can i help you ?"> <img src={whatshap} alt=""  /></a>
<a href='https://www.linkedin.com/in/shubhangi-pandey-540359219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><img src={facebook} alt="" /></a>
<img src={twiter} alt="" />
<img src={instra} alt="" />
</div>
</div>
</div>
<hr />
<div className="copi"><p>Marha © 2016-All Right Receved </p></div>

</div>
  )
}

export default Footer
