import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ThankYouPage = () => {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="border border-3 border-success"></div>
          <div className="card bg-white shadow p-5">
            <div className="mb-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-success"
                width="75"
                height="75"
                fill="currentColor"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
            <div className="text-center">
              <h2>Thank You for Booking!</h2>
              <p>Your wedding details have been successfully submitted.</p>
              <i>
                <p>
                  Feel free to contact us if you have any questions or concerns.
                </p>
              </i>

              <Link to="/#">
                <Button variant="primary" className="button">
                  Back Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
