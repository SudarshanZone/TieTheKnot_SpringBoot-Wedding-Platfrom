// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { addUser } from "../Service/api";

// import 'bootstrap/dist/css/bootstrap.min.css';

// const AddUser = () => {
//   const [id, setId] = useState("");
//   const [catering_services, setCatering_services] = useState("");
//   const [decoration, setDecoration] = useState("");
//   const [location, setLocation] = useState("");
//   const [photography_services, setPhotography_servicesNumber] = useState("");
//   const [wedding_date, setWedding_date] = useState("");
//   const [wedding_venue, setWedding_venue] = useState("");
//   const navigate = useNavigate();

//   const signup = () => {
//     if (id.length === 0) {
//       toast.error("Please enter id name");
//     } else if (catering_services.length === 0) {
//       toast.error("Please enter catering services");
//     } else if (photography_services.length === 0) {
//       toast.error("Please enter Photography_services number");
//     } else if (decoration.length === 0) {
//       toast.error("Please enter decoration");
//     } else if (location.length === 0) {
//       toast.error("Please enter location");
//     } else if (photography_services === 0) {
//       toast.error("Please enter photography services");
//     } else if (wedding_date === 0) {
//       toast.error("Please enter wedding date");
//     } else if (wedding_venue.length === 0) {
//       toast.error("Please enter wedding venue");
//     } else {
//       const body = {
//         id,
//         catering_services,
//         decoration,
//         location,
//         photography_services,
//         wedding_date,
//         wedding_venue,
//       };

//     //   axios.post(`${usersUrl}, body`).then((response) => {
//     //     const result = response.data;
//     //     console.log(result);
//     //     if (response.status === "error") {
//     //       toast.error("Error, please try again");
//     //     } else {
//     //       toast.success("New user registered!");
//     //       navigate("/signin");
//     //     }
//     //   });
//     const handleSubmit = async () => {
//         // Perform additional validations if needed
//         if (!nameError) {
//           await addUser(user);
//           navigate("/all");
//         }
//     }
//   };

//   return (
//     <div style={styles.container1}>
//       <div className="container" style={styles.container}>
//         <div className="row">
//           <div className="col-md-6 offset-md-3">
//             <div className="card">
//               <div className="card-body">
//                 <h3 className="text-center" style={{ borderBottom: '2px solid black', paddingBottom: '5px', color: "blue" }}>Signup</h3>
//                 <br></br>
//                 <div className="form-group">
//                   <label style={{ fontWeight: "bold" }}>Name</label>
//                   <input
//                     onChange={(e) => setId(e.target.value)}
//                     className="form-control"
//                     type="text"
//                     placeholder="Your first name"
//                   />
//                 </div>
//                 <br />

//                 <div className="form-group">
//                   <label style={{ fontWeight: "bold" }}>Location</label>
//                   <input
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="form-control"
//                     type="text"
//                     placeholder="Your last name"
//                   />
//                 </div>
//                 <br />

//                 <div className="form-group">
//                   <label style={{ fontWeight: "bold" }}>Wedding Date</label>
//                   <input
//                     onChange={(e) => setWedding_date(e.target.value)}
//                     className="form-control"
//                     type="tel"
//                     placeholder="Your mobile number"
//                   />
//                 </div>
//                 <br />

// <div className="form-group">
//                   <label style={{ fontWeight: "bold" }}>Wedding Venue</label>
//                   <input
//                     onChange={(e) => setWedding_venue(e.target.value)}
//                     className="form-control"
//                     type="decoration"
//                     placeholder="Your decoration"
//                   />
//                 </div>
//                 <br />

//                 <div className="form-group">
//                   <label style={{ fontWeight: "bold" }}>Catering Services</label>
//                   <input
//                     onChange={(e) => setCatering_services(e.target.value)}
//                     className="form-control"
//                     type="location"
//                     placeholder="Your location"
//                   />
//                 </div>
//                 <br />

//                 <div className="form-group">
//                   <label style={{ fontWeight: "bold" }}>Decoration</label>
//                   <input
//                     onChange={(e) => setDecoration(e.target.value)}
//                     className="form-control"
//                     type="location"
//                     placeholder="Repeat above location"
//                   />
//                 </div>
//                 <br />

//                 <div className="form-group">
//                   <label style={{ fontWeight: "bold" }}>PhotoGraphy Services</label>
//                   <input
//                     onChange={(e) => setPhotography_servicesNumber(e.target.value)}
//                     className="form-control"
//                     type="text"
//                     placeholder="yyyy-dd-mm"
//                   />
//                 </div>
//                 <br />
//                 <button className="btn" style={{ width: 250, backgroundColor: "navy", color: "white" }} onClick={handleSubmit}>
//                   Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {

//   container: {
//     position: "relative",
//     top: 100,
//   },
//   body: {
//     color: "#ffffff",
//   },
//   card: {
//     border: "1px solid #617488",
//   },
//   // Add your other CSS styles here
//   'btn': {
//     background: "linear-gradient(to bottom, #0056b3, #004080)",
//     borderColor: "#004080",
//   },
//   'btn:hover': {
//     background: "linear-gradient(to bottom, #566778, #408edc)",
//     borderColor: "#003366",
//   },
//   'signin-link': {
//     color: "#ffffff",
//   },
// };

// export default AddUser;
