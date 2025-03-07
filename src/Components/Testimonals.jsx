import React from 'react'

function Testimonals() {
  return (
    <section className="testimonials" >
    <h2 className="section-title">What Our Customers Say</h2>
    <div className="testimonial-grid">
      <div className="testimonial-card">
        <p>
          "The best macarons I've ever tasted outside of Paris. Simply divine!"
        </p>
        <p>- Sarah M.</p>
      </div>
      <div className="testimonial-card">
        <p>
          "Their croissants are absolutely perfect - buttery, flaky, and always
          fresh."
        </p>
        <p>- James P.</p>
      </div>
      <div className="testimonial-card">
        <p>
          "A little piece of heaven in every bite. The Opera cake is to die for!"
        </p>
        <p>- Emma L.</p>
      </div>
    </div>
  </section>
  
  )
}

export default Testimonals