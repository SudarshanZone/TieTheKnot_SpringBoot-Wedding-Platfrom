import React, { useState, useRef } from "react";
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

const initialValue = {
  brideName: "",
  groomName: "",
  weddingDate: "",
  baaratTime: "",
  address: "",
};

const Container = styled(FormGroup)`
width: 50%; /* Decreased width */
margin: 5% auto; /* Center the form horizontally */
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #eef5ff;
  & > div {
    margin-top: 20px;
  }
`;

const BoldLabel = styled("label")`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;
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

const WeddingCard = () => {
  const [user, setUser] = useState(initialValue);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const componentRef = useRef();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (Object.values(user).some((value) => value.trim() === "")) {
      alert("All fields are required");
      return;
    }

    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleConfirmation = async () => {
    await addUser(user);
    setConfirmationOpen(false);
    MySwal.fire({
      icon: "success",
      title: "Success!",
      text: "Form data submitted successfully!",
    });
  };

  return (
    <Container>
      <ToastContainer />
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        <center>Wedding Card Registration</center>
      </Typography>
      <FormControl>
        <BoldLabel htmlFor="brideName">Bride Name:</BoldLabel>
        <StyledInput
          onChange={handleInputChange}
          name="brideName"
          value={user.brideName}
          id="brideName"
        />
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="groomName">Groom Name:</BoldLabel>
        <StyledInput
          onChange={handleInputChange}
          name="groomName"
          value={user.groomName}
          id="groomName"
        />
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="weddingDate">Wedding Date:</BoldLabel>
        <StyledInput
          onChange={handleInputChange}
          name="weddingDate"
          value={user.weddingDate}
          id="weddingDate"
          type="date"
        />
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="baaratTime">Baarat Time:</BoldLabel>
        <StyledInput
          onChange={handleInputChange}
          name="baaratTime"
          value={user.baaratTime}
          id="baaratTime"
          type="time"
        />
      </FormControl>
      <FormControl>
        <BoldLabel htmlFor="address">Address:</BoldLabel>
        <StyledInput
          onChange={handleInputChange}
          name="address"
          value={user.address}
          id="address"
          multiline
          rows={1}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create Wedding Card
        </Button>
      </FormControl>
     
      {/* <div style={{ display: "none" }}>
        <Container ref={componentRef}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.2fe_Yyfq8MHgx6CrzXzwlAHaDO&pid=Api&P=0&h=180"
            alt="Wedding Card Placeholder"
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <Typography variant="h4" gutterBottom>
            Wedding Ceremony
          </Typography>
          <p>To Love, Laughter And Happily Ever After!</p>

          <Typography variant="h6" gutterBottom>
            {user.brideName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            &
          </Typography>
          <Typography variant="h6" gutterBottom>
            {user.groomName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            On {user.weddingDate}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Baarat: {user.baaratTime}
          </Typography>
          <Typography variant="h6" gutterBottom>
            At {user.address}
          </Typography>
          <Typography variant="h6" gutterBottom>
            FOLLOWED BY DINNER
          </Typography>
        </Container>
      </div> */}
      {/* <div style={{ backgroundImage: "url('https://images.template.net/73563/Free-wedding-card-floral-background-portrait-1.jpg')", fontFamily: "Arial, sans-serif" }}>
      <div style={{ backgroundImage: "url('https://images.template.net/73563/Free-wedding-card-floral-background-portrait-1.jpg')", height: "180px", backgroundSize: "cover", backgroundPosition: "center" }}></div>
  <Container ref={componentRef}>
  
    <img
      src="https://tse3.mm.bing.net/th?id=OIP.2fe_Yyfq8MHgx6CrzXzwlAHaDO&pid=Api&P=0&h=180"
      alt="Wedding Card Placeholder"
      style={{ width: "100%", marginBottom: "20px" }}
    />
    <Typography variant="h4" gutterBottom>
      Wedding Ceremony
    </Typography>
    <p>To Love, Laughter And Happily Ever After!</p>

    <Typography variant="h6" gutterBottom>
      {user.brideName}
    </Typography>
    <Typography variant="h6" gutterBottom>
      &
    </Typography>
    <Typography variant="h6" gutterBottom>
      {user.groomName}
    </Typography>
    <Typography variant="h6" gutterBottom>
      On {user.weddingDate}
    </Typography>
    <Typography variant="h6" gutterBottom>
      Baarat: {user.baaratTime}
    </Typography>
    <Typography variant="h6" gutterBottom>
      At {user.address}
    </Typography>
    <Typography variant="h6" gutterBottom>
      FOLLOWED BY DINNER
    </Typography>
  </Container>
</div> */}
<br>
</br>
<br></br>
<br></br>
<br></br>
<br>
</br>
<div style={{ 
  fontFamily: "Arial, sans-serif",
  minHeight: "200px", // Ensure the outer div has some height
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
 <style>
        {`
          .backgroundImageContainer {
            background-image: url('https://i.pinimg.com/originals/e6/40/19/e6401994047d4d93506d29331d2e2de9.jpg');
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
  <div style={{ 
    height: "180px", 
   textAlign: "center",
    display: "flex",
    flexDirection: "column",
    display:"none",
    justifyContent: "center"
  }}>
    <Container ref={componentRef} 
   className="backgroundImageContainer" // Apply the background image class
          style={{ 
            textAlign: "center", // Align content within the Container
            padding: "20px", // Add padding for better spacing
            color: "white" // Change text color to white for better visibility
          }}>
      {/* <img
        src="https://tse4.mm.bing.net/th?id=OIP.CV5FFhBLiu4QDXgreSQm8gHaCT&pid=Api&P=0&h=180"
        alt="Wedding Card Placeholder"
        style={{ width: "100%", marginBottom: "20px" }}
      /> */}
      <div style={{ 
        backgroundImage: `url('')`, // Add your background image URL here
        padding: "10px", // Adjust padding as needed
        borderRadius: "10px" // Adjust border radius as needed
      }}>
       <Typography variant="h4" gutterBottom style={{ color: "#FFD700", fontWeight: "bold", fontFamily: "Baskerville, serif" }}>
  WEDDING CEREMONY
</Typography>



      </div>
      <p style={{ fontStyle: "italic" }}>To Love, Laughter And Happily Ever After!</p>

      <Typography variant="h4" gutterBottom style={{ color: "#FFD700", fontFamily: "Baskerville, serif" }}>
        {user.brideName} 
      </Typography>
      <Typography variant="h6" gutterBottom style={{ color: "#FFD700", fontFamily: "Baskerville, serif" }}>
         & 
      </Typography>
      <Typography variant="h4" gutterBottom style={{ color: "#FFD700", fontFamily: "Baskerville, serif" }}>
        {user.groomName}
      </Typography>
      <Typography variant="h6" gutterBottom style={{ color: "#FFD700", fontFamily: "Gill Sans, sans-serif" }}>
  On {user.weddingDate}
</Typography>
<Typography variant="h6" gutterBottom style={{color: "#FFD700", fontFamily: "Gill Sans, sans-serif" }}>
  Baarat: {user.baaratTime}
</Typography>
<Typography variant="h6" gutterBottom style={{color: "#FFD700", fontFamily: "Gill Sans, sans-serif" }}>
  At {user.address}
</Typography>
{/* <Typography variant="h6" gutterBottom style={{ fontFamily: "Gill Sans, sans-serif", fontStyle: "italic" }}>
  FOLLOWED BY DINNER
</Typography> */}

    </Container>
  </div>
</div>

      <ConfirmationDialog
        open={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        onConfirm={handleConfirmation}
        message="Are you sure you want to submit the form data?"
        componentRef={componentRef}
      />
    </Container>
  );
};

export default WeddingCard;