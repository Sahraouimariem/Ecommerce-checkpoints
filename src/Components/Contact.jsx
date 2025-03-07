import React from 'react'

function Contact() {
  return (
    <div style={{paddingTop:"17rem"}}>
<section className="hours-location" id="contact">
  <div>
    <h2>Hours &amp; Location</h2>
    <p>Monday - Saturday: 7am - 7pm</p>
    <p>Sunday: 8am - 5pm</p>
    <p>123 Baker Street, Sweet Town</p>
    <div className="map-container">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.8828272574074!2d10.587169875296041!3d36.65326937596916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd58276218d4db%3A0x5b5a2047b4e89210!2sPatisserie%20Lawahedh%20B%C3%A9ni%20Khalled!5e0!3m2!1sfr!2stn!4v1736933457057!5m2!1sfr!2stn"
  
  style={{ border: 0 ,width:"100%",height:"100%"}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
  </div>
</section>
    </div>


  )
}

export default Contact