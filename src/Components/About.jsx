import React from 'react'

function About() {
  return (
    <section className="about-section" id="about">
    <h2 className="section-title">Meet Our Pastry Chefs</h2>
    <div className="chef-profiles">
      <div className="chef-card">
      <img style={{borderRadius:"40px",width:"400px"}} src="https://baliculinarypastryschool.com/wp-content/uploads/2023/06/AWE80777-2-1-scaled.jpg" alt="" />

        <h3>Chef Marie</h3>
        <p>Master Pastry Chef with 20 years of experience in French pastries</p>
      </div>
      <div className="chef-card">
        <img style={{borderRadius:"40px",width:"400px"}} src="https://dupqk6pckaoq7.cloudfront.net/blog/articles/62/featured.webp" alt="" />
         
        
        <h3>Chef Pierre</h3>
        <p>Specializes in artisanal bread and viennoiserie</p>
      </div>
    </div>
  </section>
  
  )
}

export default About