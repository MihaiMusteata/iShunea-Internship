import React from 'react';
import { Image } from 'react-bootstrap';
const arrowIcon = new URL('../images/arrow.png', import.meta.url);

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-align'>
        <h1>info@ishunea.io</h1>
        <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center"  style={{margin:'15px auto 0 auto'}}>
          <span>Request call</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
      </div>
      <div className='footer-align contacts'>
        <div className='contacts'>
          <h3>+373 (78) 158 337</h3>
          <h3 className='country'>Moldova</h3>
        </div>
        <div className='contacts'>
          <h3>+972 558-5556-42</h3>
          <h3 className='country'>Israel</h3>
        </div>
        <div className='contacts'>
          <h3>Monday-Friday, 09:00 - 18:00</h3>
          <h3 className='country'>Working hours</h3>
        </div>
      </div>

      <div className='footer-align links'>
        <div className='social-media'>
          <h4>Facebook</h4>
          <h4>Instagram</h4>
          <h4>LinkedIn</h4>
        </div>
        <div className='legal'>
          <h4 className='terms'>Terms & Conditions</h4>
          <h4 className='copyright'>© 2019 - 2022 iShunea. All rights reserved</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
