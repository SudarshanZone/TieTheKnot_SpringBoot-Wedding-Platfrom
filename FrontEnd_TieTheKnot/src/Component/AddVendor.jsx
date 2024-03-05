import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form , Card} from 'react-bootstrap';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import ReactToPrint from 'react-to-print';

import "../Style/VendorStyle.css"
const VendorComponent = () => {
  const [newVendor, setNewVendor] = useState({
    name: '',
    gstNumber: '',
    facility: '',
    cities: '',
    charges: 0,
    pictureLinks: '',
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const componentRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({ ...newVendor, [name]: value });
  };

  const handleAddVendor = async () => {
    const errors = {};

    if (!newVendor.name.trim()) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(newVendor.name.trim())) {
      errors.name = 'Invalid name format';
    }

    if (!newVendor.gstNumber.trim()) {
      errors.gstNumber = 'GST Number is required';
    } else if (!/^[a-zA-Z0-9]{15}$/.test(newVendor.gstNumber.trim())) {
      errors.gstNumber = 'Invalid GST Number format';
    }

    if (!newVendor.facility.trim()) {
      errors.facility = 'Facility is required';
    } else if (!/^[a-zA-Z\s]+$/.test(newVendor.facility.trim())) {
      errors.facility = 'Facility must contain only alphabetic characters';
    }

    if (!newVendor.cities.trim()) {
      errors.cities = 'Cities is required';
    } else if (!/^[a-zA-Z\s,]+$/.test(newVendor.cities.trim())) {
      errors.cities = 'Invalid cities format';
    }

    if (newVendor.charges < 10000 || newVendor.charges > 1000000) {
      errors.charges = 'Charges must be between 10,000 and 1,000,000';
    }

    if (!newVendor.pictureLinks.trim()) {
      errors.pictureLinks = 'Picture Links is required';
    } else if (!isValidURL(newVendor.pictureLinks.trim())) {
      errors.pictureLinks = 'Invalid URL format';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      toast.error('Please fill in all required fields correctly', { position: 'top-center' });
      return;
    }

    try {
      await axios.post('http://localhost:8080/vendor', newVendor);
      setConfirmationOpen(true);
    } catch (error) {
      console.error('Error adding vendor:', error);
      toast.error('Error adding vendor', { position: 'top-center' });
    }
  };

  const isValidURL = (url) => {
    // Regular expression to validate URL format
    const urlPattern = new RegExp('^(https?://)?'+ // Protocol
                     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Domain name
                     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Port and path
                     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // Query string
                     '(\\#[-a-z\\d_]*)?$','i'); // Fragment locator
    return urlPattern.test(url);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleConfirmationYes = () => {
    setConfirmationOpen(false);
    setSuccessMessageOpen(true);
  };

  const handleSuccessMessageClose = () => {
    setSuccessMessageOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-4">
        <div id="vendor-form" className="vendor-form">
          <h3 className="text-center mb-4">Add New Vendor</h3>
          <Form>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newVendor.name}
                onChange={handleInputChange}
                isInvalid={validationErrors.name}
              />
              <Form.Control.Feedback type="invalid">{validationErrors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="gstNumber" className="mb-3">
              <Form.Label>GST Number:</Form.Label>
              <Form.Control
                type="text"
                name="gstNumber"
                value={newVendor.gstNumber}
                onChange={handleInputChange}
                isInvalid={validationErrors.gstNumber}
              />
              <Form.Control.Feedback type="invalid">{validationErrors.gstNumber}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="facility" className="mb-3">
              <Form.Label>Facility:</Form.Label>
              <Form.Control
                type="text"
                name="facility"
                value={newVendor.facility}
                onChange={handleInputChange}
                isInvalid={validationErrors.facility}
              />
              <Form.Control.Feedback type="invalid">{validationErrors.facility}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="cities" className="mb-3">
              <Form.Label>Cities:</Form.Label>
              <Form.Control
                type="text"
                name="cities"
                value={newVendor.cities}
                onChange={handleInputChange}
                isInvalid={validationErrors.cities}
              />
              <Form.Control.Feedback type="invalid">{validationErrors.cities}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="charges" className="mb-3">
              <Form.Label>Charges:</Form.Label>
              <Form.Control
                type="number"
                name="charges"
                value={newVendor.charges}
                onChange={handleInputChange}
                isInvalid={validationErrors.charges}
              />
              <Form.Control.Feedback type="invalid">{validationErrors.charges}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="pictureLinks" className="mb-3">
              <Form.Label>Picture Links:</Form.Label>
              <Form.Control
                type="text"
                name="pictureLinks"
                value={newVendor.pictureLinks}
                onChange={handleInputChange}
                isInvalid={validationErrors.pictureLinks}
              />
              <Form.Control.Feedback type="invalid">{validationErrors.pictureLinks}</Form.Control.Feedback>
            </Form.Group>

            <div className="btn-center">
              <Button variant="success" onClick={handleAddVendor}>
                Add Vendor
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>
            Vendor added successfully. Do you want to continue?
          </Typography>
        </DialogContent>
        <DialogActions>
          <ReactToPrint
            trigger={() => <Button color="primary">Print Vendor Form</Button>}
            content={() => componentRef.current}
          />
          <Button onClick={handleConfirmationClose} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmationYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={successMessageOpen} onClose={handleSuccessMessageClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>
            Vendor form submitted successfully.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessMessageClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ display: 'none' }}>
        <Card ref={componentRef}>
          <Card.Body>
            <Card.Title>Vendor Details</Card.Title>
            <Card.Text>Name: {newVendor.name}</Card.Text>
            <Card.Text>GST Number: {newVendor.gstNumber}</Card.Text>
            <Card.Text>Facility: {newVendor.facility}</Card.Text>
            <Card.Text>Cities: {newVendor.cities}</Card.Text>
            <Card.Text>Charges: {newVendor.charges}</Card.Text>
          </Card.Body>
        </Card>
      </div>

    </>
  );
};

export default VendorComponent;
