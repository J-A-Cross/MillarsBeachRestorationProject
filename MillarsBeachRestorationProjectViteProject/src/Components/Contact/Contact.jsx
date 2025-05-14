import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us!</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Contact Number (Optional)" />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Please write message here!" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
