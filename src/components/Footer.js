import React from 'react'
import {  FaInstagram, FaLinkedin, FaTwitter,  } from "react-icons/fa";

import "./footer.css";
const footer = () => {
  return (
    <div className='footer'>
      <div className='sub'>
        <div className='sub-sub-footer'>
          {/* first column */}
        <div className="footer-about">
            <h3>HealthCareAi</h3>
            <p>
              @{new Date().getFullYear()} HealthCareAi.<br/> All Rights Reserved
            </p> 
          </div>
          {/* second column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
              <a
                  href="https://twitter.com/_Clinical_AI_/"
                  target="_blank" rel="noreferrer">
                  <FaTwitter className="icons" />
                </a>
              </div>
              <div>
              <a
                  href="https://www.instagram.com/"
                  target="_blank" rel="noreferrer">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/clinical-ai-assistance"
                  target="_blank" rel="noreferrer">
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Foundation For Innovators In Science And Technology(FIIST), <br/>
Office- 7, 5th Floor, Block 9<br/>
Indian Institute of Technology, Patna<br/>
Bihta, Bihar 801106 India</p>
          </div>
          {/* 5th column */}
          <div className="footer-contact">
            <h3>Sponsored By</h3>
            <div>
              <div className="microsoft">
                 <img src=".\images\Microsoft.jpeg" alt="" />
              </div>
              <div className="fist">
              <img src=".\images\fist2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
