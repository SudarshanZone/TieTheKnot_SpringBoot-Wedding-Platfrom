import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row, Table, FormControl } from 'react-bootstrap';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    try {
      await deleteUser(id);
      getAllUsers();
    } catch (error) {
      setError("Error deleting user");
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching users");
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const sortedUsers = users.sort((a, b) => {
    if (sortConfig.key === 'name' || sortConfig.key === 'city') {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    }
    return 0;
  });
  const currentUsers = sortedUsers
    .filter(user => {
      if (!searchTerm) return true;
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      <br />
     
      
      <div className="all-users-container">
      <h1 className="text-center mb-4">User List</h1>

        {error && <div className="error-message">{error}</div>}
        <FormControl
          type="text"
          placeholder="Search by name"
          className="mb-3"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

   
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="primary" onClick={() => handleSort('name')}>
            Sort by Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
          </Button>{'             '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={() => handleSort('city')}>
            Sort by City {sortConfig.key === 'city' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
          </Button>
        </div>
        
      <br />
        <Row xs={1} md={2} lg={3} className="g-4">
          {currentUsers.map((user) => (
            <Col key={user.id}>
              <Card className="custom-card">
                <Card.Body className="card-body">
                  <center>
                    <Card.Title className="card-title">
                      {user.name.toUpperCase()}
                    </Card.Title>
                  </center>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th onClick={() => handleSort('location')}>Location</th>
                        <th onClick={() => handleSort('wedding_date')}>Wedding Date</th>
                        <th onClick={() => handleSort('wedding_venue')}>Wedding Venue</th>
                        <th onClick={() => handleSort('catering_services')}>Catering Services</th>
                        <th onClick={() => handleSort('decoration')}>Decoration</th>
                        <th onClick={() => handleSort('photography_services')}>Photography Services</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{user.location}</td>
                        <td>{user.wedding_date}</td>
                        <td>{user.wedding_venue}</td>
                        <td>{user.catering_services}</td>
                        <td>{user.decoration}</td>
                        <td>{user.photography_services}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <center>
                    <Button
                      variant="primary"
                      className="edit-button"
                      as={Link}
                      to={`/edit/${user.id}`}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      className="delete-button"
                      onClick={() => deleteUserData(user.id)}
                    >
                      Delete
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Pagination>
            <Pagination.Prev
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from(
              { length: Math.ceil(users.length / usersPerPage) },
              (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            )}
            <Pagination.Next
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(users.length / usersPerPage)
              }
            />
          </Pagination>
        </div>
        <div>
        <center><Button>
          <LinkContainer to="/admin-dashboard">
                <Nav.Link className="nav-text">Admin Dashboard</Nav.Link>
              </LinkContainer></Button></center>
      </div> 
      </div>
    </>
  );
};

export default AllUsers;