import React, { useState } from "react";
import axios from "axios";
import { Button} from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import '../Style/AdminLoginStyle.css'; // Import your CSS file
import logo from "./Image/couple.png"

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:9092/login", {
        username,
        password
      });
      
      if (response.data) {
        // Successful login
        setError("");
        // Redirect to dashboard or any other page upon successful login
        navigate("/admin-dashboard"); // Use navigate instead of history.push
      } else {
        // Failed login
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error("Login error:", error);
    }
  };

  return (
    <MDBContainer className="admin-login-container" style={{ backgroundColor: "#FFD1E3" }}>
      <MDBRow>
        <MDBCol md="6">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <MDBInput placeholder="Enter your username" id='username' type='text' label='Username' value={username} onChange={(e) => setUsername(e.target.value)} required/><br></br>
              <MDBInput placeholder="Enter your password" label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <center><Button type="submit" varient="priamry" >Login</Button></center> 
              {error && <p className="error">{error}</p>} 
            </form>
            <div className="admin-messages" style={{ backgroundColor: "#E493B3" , padding:20}}>
              <h3 style={{ color: "#201658" , textAlign:"center" }}>Admin Messages</h3>
              <p style={{ color: "#6C22A6" }}>Welcome to the admin dashboard login page. Please enter your credentials to proceed.</p>
              <p style={{ color: "#6C22A6" }}>If you encounter any issues with login, please contact the system administrator.</p>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="6" className="d-flex align-items-center justify-content-center">
          <img src={logo} alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AdminLogin;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import '../Style/AdminLoginStyle.css'; // Import your CSS file

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Replace useHistory with useNavigate

//   const handleLogin = async (event) => {
//     event.preventDefault();
    
//     try {
//       const response = await axios.post("http://localhost:9092/login", {
//         username,
//         password
//       });
      
//       if (response.data) {
//         // Successful login
//         setError("");
//         // Redirect to dashboard or any other page upon successful login
//         navigate("/admin-dashboard"); // Use navigate instead of history.push
//       } else {
//         // Failed login
//         setError("Invalid username or password");
//       }
//     } catch (error) {
//       setError("An error occurred during login");
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="admin-login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//         {error && <p className="error">{error}</p>}
//       </form>
//       <div className="admin-messages">
//         <h3>Admin Messages:</h3>
//         <p>Welcome to the admin dashboard login page. Please enter your credentials to proceed.</p>
//         <p>If you encounter any issues with login, please contact the system administrator.</p>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;
