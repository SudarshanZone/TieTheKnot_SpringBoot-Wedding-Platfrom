import React, { useState } from "react";
import axios from "axios";
import { Button, Dropdown } from "react-bootstrap";

import { useNavigate, Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import '../Style/UserLoginStyle.css'; // Import your CSS file
import logo from "./Image/couple.png";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:9092/login", {
        username,
        password
      });

      if (response.data) {
        setError("");
        navigate("/Vendor");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error("Login error:", error);
    }
  };

  return (
    <MDBContainer className="login-container">
      <MDBRow>
        <MDBCol md='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <h2>Login</h2>
            </div>
            <form onSubmit={handleLogin}>
              <MDBInput label='Username' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required/>
              <MDBInput label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <center><Button type="submit" varient="priamry" >Login</Button></center> 
              {error && <p className="error">{error}</p>}
            </form>
            <div className="">
              <p>
                Don't have an account?{" "}
                <Link to="/register">Register here</Link>
              </p>
            </div>
            {/* <div className="admin-messages">
              <h3>Admin Message</h3>
              <p>Welcome, User! Please enter your username and password to access the dashboard.</p>
              <p>Ensure the security of your credentials. Do not share your login information with anyone.</p>
              <p>If you encounter any issues with logging in, please reach out to the system administrator for assistance.</p>
            </div> */}
          </div>
        </MDBCol>
        <MDBCol md='6' className="mb-5 d-flex align-items-center justify-content-center">
          <img src={logo} alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default UserLogin;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// import '../Style/UserLoginStyle.css';
// const UserLogin = () => {
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
//         navigate("/Vendor"); // Use navigate instead of history.push
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
//     <div className="user-login-wrapper">
//       <div className="user-login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <button type="submit">Login</button>
//           </div>
//           {error && <p className="error">{error}</p>}
//         </form>
//         <div className="register-link">
//           <p>
//             Don't have an account?{" "}
//             <Link to="/register">Register here</Link>
//           </p>
//         </div>
//       </div>
//       <div className="admin-messages">
//         <center><h3>Admin Message</h3></center>
//         <p>Welcome, User! Please enter your username and password to access the dashboard.</p>
//         <p>Ensure the security of your credentials. Do not share your login information with anyone.</p>
//         <p>If you encounter any issues with logging in, please reach out to the system administrator for assistance.</p>
//       </div>
//     </div>
    
//   );
// };

// export default UserLogin;


