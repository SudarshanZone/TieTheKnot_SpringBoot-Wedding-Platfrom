import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [userData, setUserData] = useState({});
  const [responseData, setResponseData] = useState({});
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleInput(event) {
    let name = event.target.name;
    let value = event.target.value;

    // Basic validation
    let error = "";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email address";
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

  function login(event) {
    event.preventDefault();

    // Additional check to ensure all fields are filled
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      alert("Please fill out all required fields correctly");
      return;
    }

    console.log(userData);
    let url = `http://localhost:9092/login`;
    axios.post(url, userData).then((response) => {
      setResponseData(response.data);
      if (response.data.status) {
        setLoginSuccess(true);
      } else {
        alert("Login failed. Please try again.");
      }
    });
  }

  return (
    <div>
      {loginSuccess ? (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{ textAlign: "center", color: "#333" }}>
            Login successful
          </h1>
          <br></br>
          <br></br>

          <i>
            <center>
              <h4>Hello, {responseData.customer} Welcome to Admin Panel...!</h4>
            </center>
          </i>
          {/* Additional content or redirection logic */}
          <br></br>

          <div className="centered-buttons">
            <Link to="/all">
              <Button variant="success" className="button">
                User List
              </Button>
            </Link>
            <Link to="/Vendor">
              <Button variant="success" className="button">
                Vendor List
              </Button>
            </Link>
          </div>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={login}
          >
            {/* <h1>{responseData.customerId}</h1> */}
            {/* Email : <input
              type="email"
              name="email"
              onChange={handleInput}
              style={{
                width: "100%",
                padding: "10px",
                margin: "5px 0",
                boxSizing: "border-box",
              }}
            />
            <span style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
              {errors.email}
            </span>
            <br />
            Password :{" "}
            <input
              type="password"
              name="password"
              onChange={handleInput}
              style={{
                width: "100%",
                padding: "10px",
                margin: "5px 0",
                boxSizing: "border-box",
              }}
            />
            <span style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
              {errors.password}
            </span>
            <br />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </button> */}
          </form>
        </div>
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={login}
        >
          <h1>{responseData.customerId}</h1>
          <b>EMAIL</b>
          <br></br>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            style={{
              width: "35%",
              padding: "10px",
              margin: "5px 0",
              boxSizing: "border-box",
            }}
          />
          <span style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
            {errors.email}
          </span>
          <br />
          <b>PASSWORD</b>
          <br></br>{" "}
          <input
            type="password"
            name="password"
            onChange={handleInput}
            style={{
              width: "35%",
              padding: "10px",
              margin: "5px 0",
              boxSizing: "border-box",
            }}
          />
          <span style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
            {errors.password}
          </span>
          <br />
          <button
            type="submit"
            style={{
              width: "10%",
              padding: "6px",
              margin: "8px 0",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}
