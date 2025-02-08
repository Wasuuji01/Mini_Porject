import React, { useState } from 'react';
import '../custom Css/Contact.css';

function ContactUs() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handler to update state on input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would usually send the form data to a backend or email service
    setFormSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please reach out with any questions or feedback.</p>
      </header>

      {formSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your message has been successfully sent. We will get back to you shortly.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder='Enter message here...'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;
