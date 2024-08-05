import React from 'react'
import './Audits.css'
import { auditData } from '../Assats/Audit'
import imahess from  "../Assats/aaaa.jpg"

const Audits = () => {
    
    
  return (
   
    <div className='wrapper'>
        <div className='auditmain'>
            <div className='auditimg'>
              <h1>AUDIT</h1>
<img src={imahess} alt="" />
            </div>
      <div className="audit">
        {auditData.map((item,i)=>(
            <div key={i} className='item'>
<div className="titel" >
    <h2>{item.question}</h2>
   <br />
</div>
<div className="content">{item.answer}</div>
            </div>

        ))}
      </div>
      </div>
    </div>
    
  )
}

export default Audits
