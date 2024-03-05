import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import i1 from "./Image/Img1.jpg";

import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundColor: "#fffacd" }}>
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="display-4">Tie The Knot</h1>
              <br />
              <p className="lead">
                Tie The Knot is a trusted wedding vendor directory that helps
                engaged couples search, compare and find the perfect local
                wedding professionals for their wedding. With all the planning
                tools, wedding services, inspiration and community one could
                dream of, wedding planning is easy and every part of the journey
                can be enjoyed.
              </p>
              <br />
              <Link to="/WeddingCard">
                <Button variant="success" className="me-2">
                  Wedding Card
                </Button>
              </Link>
              <Link to="/email">
                <Button variant="success" className="me-2">
                   Contact Form
                </Button>
              </Link>
            </Col>
            <Col md={6}>
              {/* You can add an image or any other content here */}
              <div className="image-container">
                <img
                  src={i1} // Add the path to your first hero image
                  alt="Hero Section"
                  className="img-fluid mb-3"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section " style={{ backgroundColor: "#ffe4b5" }}>
        <Container>
          <Row>
          <Col md={4}>
  <div className="feature-item" style={{ backgroundColor: "#add8e6" }}>
    <i className="fas fa-camera fa-3x"></i>
    <h3>Capture Every Moment</h3>
    <p>
      Our professional photographers will ensure that every special
      moment of your wedding is beautifully captured, creating
      timeless memories you'll cherish forever.
    </p>
  </div>
</Col>
<Col md={4}>
  <div className="feature-item" style={{ backgroundColor: "#ffb6c1" }}>
    <i className="fas fa-music fa-3x"></i>
    <h3>Melodic Atmosphere</h3>
    <p>
      Set the perfect mood with our curated selection of musicians
      and DJs, providing a melodic backdrop that enhances the magic
      of your wedding celebration.
    </p>
  </div>
</Col>

<Col md={4}>
  <div className="feature-item" style={{ backgroundColor: "#98fb98" }}>
    <i className="fas fa-users fa-3x"></i>
    <h3>Expert Planning Team</h3>
    <p>
      Our experienced wedding planning team is dedicated to turning
      your vision into reality. From logistics to decor, we've got
      it all covered for a stress-free planning process.
    </p>
  </div>
</Col>

          </Row>
        </Container>
      </section>

      {/* CSS Styles */}
      <style>
        {`
          .hero-section {
            background-color: #f8f9fa;
            padding: 100px 0;
            text-align: center;
            border-bottom: 2px solid #007bff;
          }

          .hero-section h1 {
            color: #007bff;
          }

          .features-section {
            text-align: center;
            border-top: 2px solid #28a745;
            padding-top: 30px;
          }

          .feature-item {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #28a745;
            border-radius: 10px;
            background-color: #fff;
          }

          .feature-item i {
            color: #28a745;
          }

          .image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .image-container img {
            width: 100%;
            max-width: 500px;
            margin-bottom: 7px;
            border: 2px solid #007bff;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default About;
