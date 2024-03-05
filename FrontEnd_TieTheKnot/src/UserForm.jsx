import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    weddingDate: '',
    weddingVenue: '',
    decoration: '',
    catering: '',
    photography: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission (e.g., send data to server)
      alert('Form submitted successfully!');
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.location.trim()) {
      errors.location = 'Location is required';
    }

    if (!data.weddingDate.trim()) {
      errors.weddingDate = 'Wedding date is required';
    }

    // Add additional validations as needed for other fields

    return errors;
  };

  const vendorNames = ['Ankit', 'Ajinkya', 'Sudershan','Omkar','Sudershan'];
  const weddingVenues = ['Lawn', 'Beach', 'Hall'];

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>User Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                isInvalid={!!errors.location}
              />
              <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="weddingDate">
              <Form.Label>Wedding Date</Form.Label>
              <Form.Control
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleInputChange}
                isInvalid={!!errors.weddingDate}
              />
              <Form.Control.Feedback type="invalid">{errors.weddingDate}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="weddingVenue">
              <Form.Label>Wedding Venue</Form.Label>
              <Form.Control
                as="select"
                name="weddingVenue"
                value={formData.weddingVenue}
                onChange={handleInputChange}
                isInvalid={!!errors.weddingVenue}
              >
                <option value="">Select Wedding Venue</option>
                {weddingVenues.map((venue, index) => (
                  <option key={index} value={venue}>
                    {venue}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.weddingVenue}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="decoration">
              <Form.Label>Decoration</Form.Label>
              <Form.Control
                as="select"
                name="decoration"
                value={formData.decoration}
                onChange={handleInputChange}
              >
                <option value="">Select Decoration</option>
                {vendorNames.map((vendor, index) => (
                  <option key={index} value={vendor}>
                    {vendor}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="catering">
              <Form.Label>Catering Services</Form.Label>
              <Form.Control
                as="select"
                name="catering"
                value={formData.catering}
                onChange={handleInputChange}
              >
                <option value="">Select Catering Service</option>
                {vendorNames.map((vendor, index) => (
                  <option key={index} value={vendor}>
                    {vendor}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="photography">
              <Form.Label>Photography Services</Form.Label>
              <Form.Control
                as="select"
                name="photography"
                value={formData.photography}
                onChange={handleInputChange}
              >
                <option value="">Select Photography Service</option>
                {vendorNames.map((vendor, index) => (
                  <option key={index} value={vendor}>
                    {vendor}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
