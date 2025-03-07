import React from 'react'

function Footer() {
  return (
    < >
 
  <footer className="site-footer" style={{backgroundColor:"#fcc4d4"}} >
      <div className="footer-content" >
        <div className="footer-section" style={{marginLeft:"2rem"}}>
          <h3 style={{color:"black"}}>About Sweet Delights</h3>
          <p  style={{color:"black"}}>Crafting delicious pastries with love since 2010. Our commitment to quality and taste makes every bite special.</p>
        </div>
        
        <div className="footer-section" style={{marginLeft:"2rem",color:"black"}}>
          <h3 style={{color:"black"}}>Quick Links</h3>
          <ul  >
            <li ><a href="#" >Home</a></li>
            <li ><a href="#">Our Products</a></li>
            <li ><a href="#" >Track Orders</a></li>
          </ul>
        </div>
        
        <div className="footer-section" style={{marginRight:"4rem"}}>
          <h3 style={{marginRight:"5rem",color:"black"}}>Contact Us</h3>
          <ul className="contact-info"  style={{color:"black"}}>
            <li><i className="fas fa-phone"></i> (555) 123-4567</li>
            <li><i className="fas fa-envelope"></i> info@sweetdelights.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Bakery Street, Pastry Town</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 style={{marginRight:"10rem",color:"black"}}>Follow Us</h3>
          <div className="social-links"  style={{color:"black"}}>
            <a  href="https://www.facebook.com/profile.php?id=100044186451547" target="_blank" rel="noopener noreferrer"><i  style={{color:"black"}} className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/patisserielawahedh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><i style={{color:"black"}} className="fab fa-instagram"></i></a>
           
          </div>
        </div>
      </div>
      
      <div className="footer-bottom" >
        <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="https://example.com/privacy">Privacy Policy</a></li>
          <li><a href="https://example.com/terms">Terms of Service</a></li>
          <li><a href="https://example.com/sitemap">Sitemap</a></li>
        </ul>
      </div>
    </footer>
</>

  )
}

export default Footer