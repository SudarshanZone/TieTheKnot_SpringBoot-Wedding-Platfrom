// // import React, { useState, useEffect } from 'react';
// // import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { getUsers, editUser } from '../Service/api';

// // const Container = styled(FormGroup)`
// //   width: 50%;
// //   margin: 5% 0 0 25%;
// //   & > div {
// //     margin-top: 20px;
// //   }
// // `;

// // const EditVendor = () => {
// //   const [user, setUser] = useState({
// //     id: 0,
// //     name: '',
// //     gstNumber: '',
// //     facility: '',
// //     charges: 0,
// //     pictureLinks: '',
// //     cities: '',
// //   });

// //   const { userId } = useParams();
// //   let navigate = useNavigate();

// //   useEffect(() => {
// //     loadUserDetails();
// //   }, []);

// //   const loadUserDetails = async () => {
// //     const response = await getUsers(userId); // Assuming you have a function to get user details by ID
// //     setUser(response.data);
// //   };

// //   const editUserDetails = async () => {
// //     const response = await editUser(userId, user);
// //     navigate('/allvendor');
// //   };

// //   const handleInputChange = (e) => {
// //     setUser({ ...user, [e.target.name]: e.target.value });
// //   };

// //   return (
// //     <Container>
// //       <Typography variant="h4">Edit Information</Typography>
// //       <FormControl>
// //         <InputLabel htmlFor="name">Name</InputLabel>
// //         <Input onChange={handleInputChange} name="name" value={user.name || ''} id="name" aria-describedby="name-helper-text" />
// //       </FormControl>
// //       <FormControl>
// //         <InputLabel htmlFor="gstNumber">GST Number</InputLabel>
// //         <Input onChange={handleInputChange} name="gstNumber" value={user.gstNumber || ''} id="gstNumber" />
// //       </FormControl>
// //       <FormControl>
// //         <InputLabel htmlFor="facility">Facility</InputLabel>
// //         <Input onChange={handleInputChange} name="facility" value={user.facility || ''} id="facility" />
// //       </FormControl>
// //       <FormControl>
// //         <InputLabel htmlFor="charges">Charges</InputLabel>
// //         <Input onChange={handleInputChange} name="charges" value={user.charges || ''} id="charges" type="number" />
// //       </FormControl>
// //       <FormControl>
// //         <InputLabel htmlFor="pictureLinks">Picture Links</InputLabel>
// //         <Input onChange={handleInputChange} name="pictureLinks" value={user.pictureLinks || ''} id="pictureLinks" />
// //       </FormControl>
// //       <FormControl>
// //         <InputLabel htmlFor="cities">Cities</InputLabel>
// //         <Input onChange={handleInputChange} name="cities" value={user.cities || ''} id="cities" />
// //       </FormControl>
// //       <FormControl>
// //         <Button variant="contained" color="primary" onClick={editUserDetails}>
// //           Edit Vendor
// //         </Button>
// //       </FormControl>
// //     </Container>
// //   );
// // };

// // export default EditVendor;

// // EditVendor.js
// import React, { useState, useEffect } from 'react';
// import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getVendor,editVendor } from '../Service/apiVendor';

// const Container = styled(FormGroup)`
//   width: 50%;
//   margin: 5% 0 0 25%;
//   & > div {
//     margin-top: 20px;
//   }
// `;

// const EditVendor = () => {
//   const [vendor, setVendor] = useState({
//     id: 0,
//     name: '',
//     gstNumber: '',
//     facility: '',
//     charges: 0,
//     pictureLinks: '',
//     cities: '',
//   });

//   const { vendorId } = useParams();
//   let navigate = useNavigate();

//   useEffect(() => {
//     loadVendorDetails();
//   }, []);

//   const loadVendorDetails = async () => {
//     const response = await getVendor(vendorId);
//     setVendor(response.data);
//   };

//   const editVendorDetails = async () => {
//     const response = await editVendor(vendorId, vendor);
//     navigate('/allvendor');
//   };

//   const handleInputChange = (e) => {
//     setVendor({ ...vendor, [e.target.name]: e.target.value });
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Edit Information</Typography>
//       {/* ... (other form controls) ... */}
//       <FormControl>
//         <Button variant="contained" color="primary" onClick={editVendorDetails}>
//           Edit Vendor
//         </Button>
//       </FormControl>
//     </Container>
//   );
// };

// export default EditVendor;



// EditVendor.js
import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getVendor, editVendor } from '../Service/apiVendor';
import axios from 'axios';
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
`;

const EditVendor = () => {
  const [vendor, setVendor] = useState({
    id: 0,
    name: '',
    gstNumber: '',
    facility: '',
    charges: 0,
    pictureLinks: '',
    cities: '',
  });

  const { vendorId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadVendorDetails();
  }, []);

  const loadVendorDetails = async () => {
    try {
      const response = await getVendor(vendorId);
      setVendor(response.data);
    } catch (error) {
      console.error('Error fetching vendor details:', error);
    }
  };

  const editVendorDetails = async () => {
    try {
      const response = await editVendor(vendorId, vendor);
      navigate('/allvendor');
    } catch (error) {
      console.error('Error editing vendor:', error);
    }
  };

  const handleInputChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h4">Edit Information</Typography>

      {/* Add your other form controls here based on the vendor object properties */}
      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          onChange={handleInputChange}
          name="name"
          value={vendor.name}
          id="name"
        />
      </FormControl>

      {/* Add other form controls as needed */}

      <FormControl>
        <Button variant="contained" color="primary" onClick={editVendorDetails}>
          Edit Vendor
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditVendor;
