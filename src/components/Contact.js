import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;