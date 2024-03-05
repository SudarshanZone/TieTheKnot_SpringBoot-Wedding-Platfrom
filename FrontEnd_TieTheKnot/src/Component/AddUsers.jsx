import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { addUser } from "../Service/api";
import ReactToPrint from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Import Playfair Display font
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import { LinkContainer } from "react-router-bootstrap";

const initialValue = {
  id: "0",
  catering_services: "",
  decoration: "",
  location: "",
  name: "",
  photography_services: "",
  wedding_date: "",
  wedding_venue: "",
};

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #eef5ff; /* Container background color */
  & > div {
    margin-top: 20px;
  }
`;

const BoldLabel = styled("label")`
  font-weight: bold;
  margin-bottom: 5px;
  font-family: "Playfair Display", serif;
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;
  border: 1px solid #b4d4ff; /* Input field border color */
  border-radius: 5px;
  padding: 8px;
  font-family: "Playfair Display", serif;
  background-color: #b4d4ff; /* Input field background color */
`;

const Select = styled("select")`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #b4d4ff; /* Dropdown border color */
  border-radius: 5px;
  font-family: "Playfair Display", serif;
  background-color: #b4d4ff; /* Dropdown background color */
`;

const ConfirmationDialog = ({
  open,
  onClose,
  onConfirm,
  message,
  componentRef,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Confirm
        </Button>
        <ReactToPrint
          trigger={() => <Button variant="contained">Print Form</Button>}
          content={() => componentRef.current}
        />
      </DialogActions>
    </Dialog>
  );
};

const MySwal = withReactContent(Swal);

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const [confirmationOpen, setConfirmationOpen] = useState(false); // State to manage the confirmation dialog
  const [error, setError] = useState(null); // State to manage the error message
  const navigate = useNavigate();
  const componentRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate the input value before updating the state
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      // If the input value contains symbols or numbers, do not update the state
      return;
    }

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    if (user.name.trim() === "") {
      // Display toaster notification if name field is empty
      toast.error("Name field is required");
      return;
    }

    if (
      Object.values(user).some((value) => value.trim() === "") ||
      Object.values(user).length !== Object.keys(initialValue).length
    ) {
      toast.error("All fields are required");
      return;
    }

    // Validate the wedding date
    const selectedDate = new Date(user.wedding_date);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      setError("Please select a future date for the wedding.");
      return;
    }

    // Open the confirmation dialog when the form is submitted
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleConfirmation = async () => {
    await addUser(user);
    setConfirmationOpen(false); // Close the dialog after confirmation
    // Display confirmation message here
    MySwal.fire({
      icon: "success",
      title: "Success!",
      text: "Form data submitted successfully!",
    });
  };

  const vendorNames = [
    "Ankit",
    "Ajinkya",
    "Sudarshan Zarkar",
    "Omkar",
    "Sudarshan Zimal",
  ];
  const weddingVenues = ["Lawn", "Beach", "Hall"];
  const locations = ["Lonavala", "Alibag", "Mumbai", "Pune"];

  return (
    <Container>
      <ToastContainer />
      <Typography
        variant="h4"
        style={{ fontFamily: "Playfair Display", marginBottom: "20px" }}
      >
        <b>
          <u>
            <center>Register Yourself</center>
          </u>
        </b>
      </Typography>
      <FormControl>
        <BoldLabel htmlFor="name">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Playfair Display",
              marginBottom: "20px",
            }}
          >
            <b>Name : </b>
          </Typography>
        </BoldLabel>
        <StyledInput
          onChange={handleInputChange}
          name="name"
          value={user.name}
          id="name"
        />
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="location">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Playfair Display",
              marginBottom: "20px",
            }}
          >
            <b>Location : </b>
          </Typography>
        </BoldLabel>
        <Select
          name="location"
          value={user.location}
          onChange={handleInputChange}
        >
          <option value="">Select Location</option>
          {locations.map((vendor, index) => (
            <option key={index} value={vendor}>
              {vendor}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="wedding_date">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Playfair Display",
              marginBottom: "20px",
            }}
          >
            <b>Wedding Date : </b>{" "}
          </Typography>
        </BoldLabel>
        <StyledInput
          onChange={handleInputChange}
          name="wedding_date"
          value={user.wedding_date}
          id="wedding_date"
          type="date"
          min={(new Date()).toISOString().split('T')[0]}
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="wedding_venue">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Playfair Display",
              marginBottom: "20px",
            }}
          >
            <b>Wedding Venue : </b>
          </Typography>
        </BoldLabel>
        <Select
          name="wedding_venue"
          value={user.wedding_venue}
          onChange={handleInputChange}
        >
          <option value="">Select Wedding Venue</option>
          {weddingVenues.map((venue, index) => (
            <option key={index} value={venue}>
              {venue}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="catering_services">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Playfair Display",
              marginBottom: "20px",
            }}
          >
            <b>Catering Services : </b>
          </Typography>
        </BoldLabel>
        <Select
          name="catering_services"
          value={user.catering_services}
          onChange={handleInputChange}
        >
          <option value="">Select Catering Service</option>
          {vendorNames.map((vendor, index) => (
            <option key={index} value={vendor}>
              {vendor}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="decoration">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Playfair Display",
              marginBottom: "20px",
            }}
          >
            <b>Decoration : </b>
          </Typography>
        </BoldLabel>
        <Select
          name="decoration"
          value={user.decoration}
          onChange={handleInputChange}
        >
          <option value="">Select Decoration</option>
          {vendorNames.map((vendor, index) => (
            <option key={index} value={vendor}>
              {vendor}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="photography_services">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Playfair Display",
              marginBottom: "20px",
            }}
          >
            <b>Photography Services : </b>
          </Typography>
        </BoldLabel>
        <Select
          name="photography_services"
          value={user.photography_services}
          onChange={handleInputChange}
        >
          <option value="">Select Photography Service (Optional)</option>
          {vendorNames.map((vendor, index) => (
            <option key={index} value={vendor}>
              {vendor}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add User
        </Button>
      </FormControl>

      <div style={{ display: "none" }}>
        <Container ref={componentRef}>
          {/* This will be hidden when printing */}
          {/* Your form content here */}
          <Typography variant="h4" gutterBottom>
            Register Yourself
          </Typography>
          <Typography variant="h6" gutterBottom>
            Name: {user.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Location: {user.location}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Wedding Date: {user.wedding_date}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Wedding Venue: {user.wedding_venue}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Catering Services: {user.catering_services}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Decoration: {user.decoration}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Photography Services: {user.photography_services}
          </Typography>
        </Container>
      </div>

      {/* Confirmation dialog */}
      <ConfirmationDialog
        open={confirmationOpen}
        onClose={() => setConfirmationOpen(false)} // Close the dialog when canceled
        onConfirm={handleConfirmation}
        message="Are you sure you want to submit the form data?"
        componentRef={componentRef} // Pass the componentRef to the ConfirmationDialog
      />
    </Container>
  );
};

export default AddUser;