import React, { useState } from "react";
import axios from "axios";
import "./Style/Register.css"; // Import your CSS file
import { Link } from "react-router-dom"; 

export default function Register() {
  const [userData, setUserData] = useState({});
  const [responseData, setResponseData] = useState({});
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success

  function handleInput(event) {
    let name = event.target.name;
    let value = event.target.value;

    let error = "";
    if (name === "firstName" && value.trim() === "") {
      error = "First Name is required";
    } else if (name === "lastName" && value.trim() === "") {
      error = "Last Name is required";
    } else if (name === "username" && value.trim() === "") {
      error = "Username is required";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters long";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  }

  async function register(event) {
    event.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      alert("Please fill out all required fields correctly");
      return;
    }

    userData.role = "USER";

    let url = `http://localhost:9092/register`;

    try {
      let response = await axios.post(url, userData);
      setResponseData(response.data);
      setRegistrationSuccess(true); // Update registration success state
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <div className="register-container" style={{ marginTop: '50px', marginBottom: '50px' }}>
      {registrationSuccess ? (
        <h1>Vendor Registration successful !!!</h1>
      ) : (
        <form onSubmit={register}>
          <h1>{responseData.customerId}</h1>
          First Name :{" "}
          <input type="text" name="firstName" onChange={handleInput} />
          <span style={{ color: "red" }}>{errors.firstName}</span>
          <br />
          Last Name :{" "}
          <input type="text" name="lastName" onChange={handleInput} />
          <span style={{ color: "red" }}>{errors.lastName}</span>
          <br />
          Username :{" "}
          <input type="text" name="username" onChange={handleInput} />
          <span style={{ color: "red" }}>{errors.username}</span>
          <br />
          Password :{" "}
          <input type="password" name="password" onChange={handleInput} />
          <span style={{ color: "red" }}>{errors.password}</span>
          <br />
          <button type="submit">Register</button>
        </form>
        
      )}
      <div className="register-link">
          <p>
          Already have an account?{" "}
    <Link to="/userJWT-login">Login</Link>
          </p>
        </div>
    </div>
  );
}
