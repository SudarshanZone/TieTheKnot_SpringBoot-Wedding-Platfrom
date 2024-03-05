import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
// import './VendorForm.css';

const VendorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gstNumber: '',
    facility: '',
    cities: [],
    charges: '',
    pictureLinks: '',
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData.cities, value] : prevData.cities.filter(city => city !== value)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission (e.g., send data to server)
      setShowAlert(true);
      // You can also reset the form or perform any other necessary actions
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!/^[a-zA-Z ]+$/.test(data.name.trim())) {
      errors.name = 'Name should contain only alphabets';
    }

    if (!/^[A-Z]{2}[0-9A-Za-z]{13}$/.test(data.gstNumber.trim())) {
      errors.gstNumber = 'Invalid GST Number';
    }

    if (!data.facility.trim()) {
      errors.facility = 'Facility is required';
    }

    if (data.cities.length === 0) {
      errors.cities = 'Select at least one city';
    }

    if (!/^\d+$/.test(data.charges.trim())) {
      errors.charges = 'Charges must be a number';
    }

    // Add additional validations as needed for other fields

    return errors;
  };

  const closeAlert = () => setShowAlert(false);

  const clearForm = () => {
    setFormData({
      name: '',
      gstNumber: '',
      facility: '',
      cities: [],
      charges: '',
      pictureLinks: '',
    });
    setErrors({});
  };

  const facilityOptions = [
    'Wedding Venue',
    'Photography',
    'Catering Services',
    'Floral Decoration',
    // Add more facility options as needed
  ];

  const cityOptions = ['Pune', 'Lonavala', 'Goa', 'Mumbai'];

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Vendor Registration Form</h2>
          <Form onSubmit={handleSubmit}>
            {showAlert && (
              <Alert variant="success" onClose={closeAlert} dismissible>
                Form submitted successfully!
              </Alert>
            )}

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

            <Form.Group controlId="gstNumber">
              <Form.Label>GST Number</Form.Label>
              <Form.Control
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleInputChange}
                isInvalid={!!errors.gstNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.gstNumber}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="facility">
              <Form.Label>Facility Provided</Form.Label>
              <Form.Control
                as="select"
                name="facility"
                value={formData.facility}
                onChange={handleInputChange}
                isInvalid={!!errors.facility}
              >
                <option value="">Select Facility</option>
                {facilityOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.facility}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="cities">
              <Form.Label>City</Form.Label>
              <div>
                {cityOptions.map((city, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={`city-${index}`}
                    label={city}
                    name="cities"
                    value={city}
                    checked={formData.cities.includes(city)}
                    onChange={handleInputChange}
                  />
                ))}
              </div>
              {errors.cities && (
                <div className="text-danger">{errors.cities}</div>
              )}
            </Form.Group>

            <Form.Group controlId="charges">
              <Form.Label>Charges (in Rupees)</Form.Label>
              <Form.Control
                type="text"
                name="charges"
                value={formData.charges}
                onChange={handleInputChange}
                isInvalid={!!errors.charges}
              />
              <Form.Control.Feedback type="invalid">{errors.charges}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="pictureLinks">
              <Form.Label>Picture Links</Form.Label>
              <Form.Control
                type="text"
                name="pictureLinks"
                value={formData.pictureLinks}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <Button variant="secondary" onClick={clearForm} className="ml-2">
              Clear
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VendorRegistrationForm;
