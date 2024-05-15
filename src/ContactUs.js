import React from 'react';

function ContactUs() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you!</p>
      <p>For inquiries, feedback, or support, please reach out to us through one of the following channels:</p>
      <ul className="list-group">
        <li className="list-group-item">Email: example@example.com</li>
        <li className="list-group-item">Phone: +1234567890</li>
        {/* Add more contact methods as needed */}
      </ul>
    </div>
  );
}

export default ContactUs;
