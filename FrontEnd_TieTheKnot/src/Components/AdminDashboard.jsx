import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Toast } from "react-bootstrap";
import { RiDeleteBin6Line } from 'react-icons/ri';
import "../Style/AdminDashboardStyle.css";
import { useNavigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [actionType, setActionType] = useState('');
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  const handleActionConfirmation = (type) => {
    setActionType(type);
    setShowModal(true);
  }

  const handleAction = () => {
    // Perform action based on actionType (e.g., navigate to user list, vendor list, or contact form)
    setShowModal(false);
    setShowToast(true);
    switch (actionType) {
      case 'user':
        navigate("/all");
        break;
      case 'vendor':
        navigate("/all-vendor");
        break;
      case 'contact':
        navigate("/ContactForm");
        break;
      default:
        break;
    }
  }

  return (
    <div className="admin-dashboard">
      <Container>
        <h2 className="admin-title">Welcome to Admin Dashboard</h2>
        <Row className="admin-info">
          <Col>
            <p className="admin-message">
              Welcome, Admin! You have full control over the user and vendor lists.
            </p>
            <p className="admin-message">
              Use the buttons below to access user and vendor information.
            </p>
          </Col>
        </Row>
        <Row className="admin-actions">
          <Col>
            <Button variant="primary" className="btn-user-list" onClick={() => handleActionConfirmation('user')}>
              User List
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="btn-vendor-list" onClick={() => handleActionConfirmation('vendor')}>
              Vendor List
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="btn-contact-form" onClick={() => handleActionConfirmation('contact')}>
              Contact Form
            </Button>
          </Col>
        </Row>
        <Row className="additional-info">
          <Col>
            <p className="info-message">
              Make sure to keep user and vendor information updated for a seamless
              experience.
            </p>
            <p className="info-message">
              Regularly review and manage user and vendor accounts to maintain
              security and quality standards.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to perform CRUD Operations?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="primary" onClick={handleAction}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast Message */}
      <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>{actionType === 'contact' ? 'Contact form action performed successfully!' : 'Action performed successfully!'}</Toast.Body>
      </Toast>
    </div>
  );
};

export default AdminDashboardPage;
