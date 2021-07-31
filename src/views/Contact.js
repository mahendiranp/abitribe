import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <section id="contact" class="contact section-bg ">
            <div class="container">
               <div class="section-title">
                  <h2>DISCUSSION FORUM</h2>
                  <p>In case of any query feel free to reach us at any of our social media handles, you can find links to those on the left. A discussion forum for all defence aspirants is under development where you can discuss over different topics related to selection in the forces with other aspirants and get your answers. </p>
               </div>
               <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                     <div class="form-row">
                        <div class="form-group col-md-6">
                           <label for="name">Your Name</label>
                           <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                           <div class="validate"></div>
                        </div>
                        <div class="form-group col-md-6">
                           <label for="name">Your Email</label>
                           <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email"/>
                           <div class="validate"></div>
                        </div>
                     </div>
                     <div class="form-group">
                        <label for="name">Subject</label>
                        <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                        <div class="validate"></div>
                     </div>
                     <div class="form-group">
                        <label for="name">Message</label>
                        <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                        <div class="validate"></div>
                     </div>
                     <div class="mb-3">
                        <div class="loading">Loading</div>
                        <div class="error-message">Enter Valid Mail address. </div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                     </div>
                     <div class="text-center"><button type="submit">Send Message</button></div>
                  </form>
               </div>
            </div>
         </section>
    );
};

Contact.propTypes = {
    
};

export default Contact;