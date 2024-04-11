import React from 'react'
import'./Contact.css'


const Contact = () => {
  return (
    <div class="box">
    <div id="box" class="container ">
      
      <div id="ss"class="row  mb-5">
        <div id="self-arrange"class="col-md-6   ">
          <h1 class="text-start">
            Contact Us
          </h1>


        </div>
      </div>
      <div class="row sec_sp">
        <div class="col-md-4 mb-5" id="arrange">
          <h3 class="color_sec py-4">Get In Touch</h3>
          <address>
            <strong>Email : Group08@mix.wvu.edu</strong>
            <br/>
            <br/>
            
            <strong>Phone: +1 304 XXXX XXX</strong>

            
          </address>
          
        </div>
        <div class="col-md-7 d-flex align-items-center">
          <form class="contact__form w-100">
            <div class="row">
              <div class="col-md-6 form-group">
                <input class="form-control" id="name" name="name" placeholder="Name" type="text"/>

              </div>
              <div class="col-md-6 form-group">
                <input class="form-control rounded-0" id="email" name="email" placeholder="Email" type="email"/>
                
              </div>
            </div>
            <textarea class="form-control rounded-0" id="message" name="message" placeholder="write a message..." rows='20'>

            </textarea>
            <br/>
            <div class="row">
              <div class="col from-group" lg='12' >
                <button class="btn ac_btn btn-light" type="submit">Send</button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Contact;