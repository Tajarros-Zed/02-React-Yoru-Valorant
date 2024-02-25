import React from 'react';
import './footer.css';
import fakeoutLogo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='fakeout__footer section__padding'>

      <div className='fakeout__footer-heading'>
        <h1 className='heading__text'>Call me when the world ends again. I'd hate to miss it</h1>
      </div>

      <div className='fakeout__footer-button'>
        <p>Download Valorant</p>
      </div>

      <div className='fakeout__footer-links'>
        <div className='fakeout__footer-links_logo'>
          <img src={fakeoutLogo} alt="logo-footer" />
          <p>Zedrick Jerol Tajarros. All Rights Reserved 2024</p>
        </div>

        <div className='fakeout__footer-links_div'>
          <h4>Links</h4>
          <p>Facebook</p>
          <p>Github</p>
          <p>Instagram</p>
          <p>Contact</p>
        </div>

        <div className='fakeout__footer-links_div'>
          <h4>Email</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>iVAUZCH</p>
        </div>

        <div className='fakeout__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>143E-Mendoza St. Buting, Pasig City</p>
          <p>09455702579</p>
          <p>Tajarros@gmail.com</p>
        </div>

        <div className="fakeout__footer-copyright">
          <p>© 2024 FAKEOUT. All Rights Reserved.</p>
        </div>

      </div>

      

    </div>
  )
}

export default Footer