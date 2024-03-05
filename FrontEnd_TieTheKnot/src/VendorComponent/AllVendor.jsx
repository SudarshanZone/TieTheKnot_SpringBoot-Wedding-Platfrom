import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllVendors, deleteVendor } from '../Service/apiVendor';

const AllVendor = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getAllVendors();
  }, []);

  const deleteVendorData = async (id) => {
    await deleteVendor(id);
    getAllVendors();
  };

  const getAllVendors = async () => {
    try {
      let response = await getAllVendors();
      setVendors(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {vendors.map((vendor) => (
          <Col key={vendor.id}>
            <Card>
              <Card.Body>
                <Card.Title>Name: {vendor.name}</Card.Title>
                {/* ... (other vendor details) ... */}
                <Button
                  variant="primary"
                  as={Link}
                  to={`/editvendor/${vendor.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteVendorData(vendor.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllVendor;