/*********************************************
 * @author Mazin Alambouri
 * @contribution Entire file
 * @brief This is the Contact page of the website.
 *********************************************/

import React from 'react';
import './Contact.css';
import Navbar from './Navbar';

/**
 * Contact component represents a page for contacting the website.
 * It includes a navigation bar, contact information, and a form for sending messages.
 */
const Contact = () => {
  return (
    <>
      {/* Include the navigation bar */}
      <Navbar />

      {/* Contact section */}
      <div className="box">
        <div id="box" className="container">
          
          {/* Title */}
          <div id="ss" className="row mb-5">
            <div id="self-arrange" className="col-md-6">
              <h1 className="text-start">Contact Us</h1>
            </div>
          </div>
          
          {/* Contact information */}
          <div className="row sec_sp">
            <div className="col-md-4 mb-5" id="arrange">
              <h3 className="color_sec py-4">Get In Touch</h3>
              <address>
                <strong>Email: Group08@mix.wvu.edu</strong>
                <br/>
                <br/>
                <strong>Phone: +1 304 XXXX XXX</strong>
              </address>
            </div>

            {/* Contact form */}
            <div className="col-md-7 d-flex align-items-center">
              <form className="contact__form w-100">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                  </div>
                  <div className="col-md-6 form-group">
                    <input className="form-control rounded-0" id="email" name="email" placeholder="Email" type="email"/>
                  </div>
                </div>
                
                {/* Message textarea */}
                <textarea className="form-control rounded-0" id="message" name="message" placeholder="Write a message..." rows='20'></textarea>
                <br/>

                {/* Submit button */}
                <div className="row">
                  <div className="col from-group" lg='12'>
                    <button className="btn ac_btn btn-light" type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;