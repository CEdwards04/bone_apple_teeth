import React from 'react'
import './Footer.css';
import fb from './facebook.png';
import ig from './instagram.png';
import x from './twitter.png';
import pt from './social.png';
export const Footer = () => {
  return (
    <div class="footer">
        <div class="sb_footer section_padding">
            <div class="sb_footer-links">
                <div class="sb_footer-links-div">
                 <h4>For Business</h4>
                 <a href="/employer">
                  <p>Employer</p>  
                </a>   
                <a href="/employer">
                  <p>Health Plan</p>  
                </a>
                <a href="/employer">
                  <p>Individual</p>  
                </a>
                <a href="/employer">
                  <p>Salary</p>  
                </a>
                </div>
                <div class="sb_footer-links-div">
                 <h4>Resources</h4>
                 <a href="/employer">
                  <p>Resource center</p>  
                </a>   
                <a href="/employer">
                  <p>Chef</p>  
                </a>
                <a href="/employer">
                  <p>Recipes Maker</p>  
                </a>
                <a href="/employer">
                  <p></p>  
                </a>
                </div>
                <div class="sb_footer-links-div">
                 <h4>Parteners</h4>
                 <a href="/employer">
                  <p>CS230</p>  
                </a>   
                <a href="/employer">
                  <p>WVU</p>  
                </a>
                <a href="/employer">
                  <p>Davien</p>  
                </a>
                <a href="/employer">
                  <p>Salary</p>  
                </a>
                </div>
                <div class="sb_footer-links-div">
                 <h4>Company</h4>
                 <a href="/employer">
                  <p>Employer</p>  
                </a>   
                <a href="/employer">
                  <p>Health Plan</p>  
                </a>
                <a href="/employer">
                  <p>Individual</p>  
                </a>
                <a href="/employer">
                  <p>Salary</p>  
                </a>
                </div>
                <div class="sb_footer-links-div">
                    <h4>Comming soon on</h4>
                    <div class="socialmedia">
                        <p><img src={fb} alt="facebook"/></p>
                        <p><img src={ig} alt="Instagram"/></p>
                        <p><img src={pt} alt="Pinterst"/></p>
                        <p><img src={x} alt="X"/></p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div class="sb_footer-below">
                <div class="sb_footer_copyright">
                    <p>
                        @{new Date().getFullYear()} Group 08.Allright reserved.
                    </p>
                </div>
                <div class="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/secuirty"><div><p>Security</p></div></a>
                    <a href="/cookies"><div><p>Cookies Declarations</p></div></a>
                </div>

            </div>
        </div>
    </div>
  )
}
export default Footer;
