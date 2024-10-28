/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

function Contact() {
  return (
    <div className="contact" css={contactStyle}>
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

const contactStyle = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input,
  textarea {
    margin: 10px;
    padding: 10px;
    width: 90%;
  }
  button {
    padding: 10px 20px;
    background-color: var(--success-color);
    color: white;
    border: none;
  }
`;

export default Contact;