import React, { useState } from 'react';
import axios from 'axios';
import '../Style/ContactFormStyle.css'; // Import your CSS file

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    subject: '',
    message: '',
    query: '',
    mobileNumber: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = 'http://localhost:8080/send-user-email-to-admin';

    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      setError('An error occurred while sending the email.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container" style={{ backgroundColor: "#FFD1E3" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>From:</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>To:</label>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Query:</label>
          <input
            type="text"
            name="query"
            value={formData.query}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Email'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Email sent successfully!</p>}
    </div>
  );
};

export default ContactForm2;
