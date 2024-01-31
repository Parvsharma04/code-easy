import React from 'react'
import fb from '../assets/fb.webp'
import insta from '../assets/insta.jpg'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import '../styles/footer.css'
const footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer_section_padding'>
        <div className='sb_footer-links'>
            <div className='sb_footer-links_div'>
            <h4>For Buissness</h4>
            <a href="/employer">
                <p>Employer</p>
            </a>
            <a href="/healthplan">
                <p>Health Plan</p>
            </a>
            <a href="/indiviual">
                <p>Indiviual</p>
            </a>
            </div>
            <div className='sb_footer-links_div'>
                <h4>Resources</h4>
                <a href="/resource">
                <p>Resource Center</p>
            </a>
            <a href="/resource">
                <p>Testimonials</p>
            </a>
            <a href="/resource">
                <p>STV</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>Partners</h4>
                <a href="/employer">
                    Swing Tech
                </a>
            </div>
            <div className="sb_footer-links_div">
            <h4>Company</h4>
                <a href="/about">
                <p>About</p>
            </a>
            <a href="/press">
                <p>Press</p>
            </a>
            <a href="/career">
                <p>Career</p>
                </a> 
            <a href="/contact">
                <p>Contact</p>
                </a> 
            </div>
      <div className="sb_footer-links_div">
        <h4>Coming Soon</h4>
        <div className="socialmedia">
            <p><img src="fb" alt="" /></p>
            <p><img src="twitter" alt="" /></p>
            <p><img src="linkedin" alt="" /></p>
            <p><img src="insta" alt="" /></p>
        </div>
      </div>
        </div>
        <hr />
        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Codeeasy.All rights reserved.
                </p>
            </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms and Conditions.</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default footer
