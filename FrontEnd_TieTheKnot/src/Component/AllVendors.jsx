import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/allvendors.css';
import { Button, Card, Col, Pagination, Row, Table, Form } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
const AllVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [showVendors, setShowVendors] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const fetchVendors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/vendors');
      setVendors(response.data);
      setShowVendors(true);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const handleDeleteVendor = async (vendorId) => {
    try {
      await axios.delete(`http://localhost:8080/vendor/${vendorId}`);
      fetchVendors();
      toast.success('Vendor deleted successfully', { position: 'center' });
    } catch (error) {
      console.error('Error deleting vendor:', error);
      toast.error('Error deleting vendor', { position: 'top-center' });
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const usersPerPage = 3;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredVendors = vendors
    .filter((vendor) => {
      if (!searchTerm) return true;
      return (
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.gstNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.facility.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.cities.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.charges.toString().includes(searchTerm.toLowerCase()) ||
        vendor.pictureLinks.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      }
      return 0;
    });

  const currentVendors = filteredVendors.slice(indexOfFirstUser, indexOfLastUser);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-4 vendor-container2">
        <h1 className="text-center mb-4">Vendor List</h1>
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by name, GST number, Facility, Cities, Charges, Picture Links"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="primary" onClick={() => handleSort('name')}>
            Sort by Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
          </Button>{'             '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={() => handleSort('city')}>
            Sort by City {sortConfig.key === 'city' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
          </Button>

        </div>
        <br></br>
        {showVendors && (
          <div>
            {currentVendors.length > 0 && (
              <Row>
                {currentVendors.map((vendor) => (
                  <Col key={vendor.id} xs={4}>
                    <Card className="custom-card">
                      <Card.Body className="card-body">
                        <h5 className="card-title">{vendor.name}</h5>
                        <Table striped bordered hover responsive>
                          <tbody>
                            <tr>
                              <td><strong>GST Number:</strong></td>
                              <td>{vendor.gstNumber}</td>
                            </tr>
                            <tr>
                              <td><strong>Facility:</strong></td>
                              <td>{vendor.facility}</td>
                            </tr>
                            <tr>
                              <td><strong>Cities:</strong></td>
                              <td>{vendor.cities}</td>
                            </tr>
                            <tr>
                              <td><strong>Charges:</strong></td>
                              <td>{vendor.charges}</td>
                            </tr>
                            <tr>
                              <td><strong>Picture Links:</strong></td>
                              <td>{vendor.pictureLinks}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <div className="text-center">
                          <Button variant="danger" onClick={() => handleDeleteVendor(vendor.id)}>
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Pagination>
                <Pagination.Prev
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: Math.ceil(filteredVendors.length / usersPerPage) }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === Math.ceil(filteredVendors.length / usersPerPage)}
                />
              </Pagination>
            </div>
            <center><Button>
          <LinkContainer to="/admin-dashboard">
                <Nav.Link className="nav-text">Admin Dashboard</Nav.Link>
              </LinkContainer></Button></center>
          </div>
        )}
      </div>
    </>
  );
};

export default AllVendors;