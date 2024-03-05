// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import '../Style/ContactFormStyle.css'; // Import your CSS file
import Nav from "react-bootstrap/Nav";
import { Button, Dropdown } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
// Define ContactForm component
const ContactForm = () => {
  // State variables for form inputs, error, and success messages
  const [to, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state while waiting for server response
    const url = 'http://localhost:8080/send-email';

    try {
      // Send POST request to server with form data
      const response = await axios.post(url, { to, subject, message });
      console.log(response.data);
      setSuccess(true); // Set success state if email sent successfully
    } catch (error) {
      setError('An error occurred while sending the email.');
      console.error(error);
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  // Render form and messages
  return (
    <>
    <div className="contact-form-container" style={{ backgroundColor: "#FFD1E3" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {/* Disable button and display loading message while loading */}
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Email'}
        </button>
      </form>
      {/* Display error or success message */}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Email sent successfully!</p>}
    </div>
    
    <center>
    <Button>
      <LinkContainer to="/admin-dashboard">
        <Nav.Link className="nav-text">Admin Dashboard</Nav.Link>
      </LinkContainer>
    </Button>
  </center>
  </>
  );
};

// Export ContactForm component
export default ContactForm;

// // Import necessary dependencies
// import React, { useState } from 'react';
// import axios from 'axios';

// // Define ContactForm component
// const ContactForm = () => {
//   // State variables for form inputs, error, and success messages
//   const [to, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state while waiting for server response
//     const url = 'http://localhost:8080/send-email';

//     try {
//       // Send POST request to server with form data
//       const response = await axios.post(url, { to, subject, message });
//       console.log(response.data);
//       setSuccess(true); // Set success state if email sent successfully
//     } catch (error) {
//       setError('An error occurred while sending the email.');
//       console.error(error);
//     } finally {
//       setLoading(false); // Reset loading state after request completes
//     }
//   };

//   // Render form and messages
//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={to}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Subject:</label>
//           <input
//             type="text"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Message:</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         {/* Disable button and display loading message while loading */}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Sending...' : 'Send Email'}
//         </button>
//       </form>
//       {/* Display error or success message */}
//       {error && <p>{error}</p>}
//       {success && <p>Email sent successfully!</p>}
//     </div>
//   );
// };

// // Export ContactForm component
// export default ContactForm;
