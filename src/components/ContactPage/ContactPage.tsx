import React from 'react'

const ContactPage = () => {
  return (
    <>
    <h5 style={{textDecoration:"underline", margin:"2rem 0", textShadow: "2px 2px 8px grey", fontVariant:"small-caps"}}> Contact us! </h5>
        <div> ISRO Headquarters </div>
        <div> Antariksh Bhavan, New BEL Road </div>
        <div> Bengaluru-560 094 </div>

    <div style={{margin:"1rem"}}> Phone: <a href="tel:+918022172294"> +91 80 22172294 </a> </div>
    <div  style={{margin:"1rem"}}> Email: <a href="mailto:isropr@isrto.gov.in"> isropr@isro.gov.in </a> </div>
    </>
  )
}

export default ContactPage