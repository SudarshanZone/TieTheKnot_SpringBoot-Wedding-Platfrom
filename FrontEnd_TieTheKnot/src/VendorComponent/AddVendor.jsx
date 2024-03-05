import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addVendor } from '../Service/apiVendor';

const initialValue = {
  name: '',
  gstNumber: '',
  facility: '',
  charges: '',
  pictureLinks: '',
  cities: [],
};

const VendorRegistrationForm = () => {
  const [formData, setFormData] = useState(initialValue);
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === 'checkbox'
          ? checked
            ? [...prevData.cities, value]
            : prevData.cities.filter((city) => city !== value)
          : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await addVendor(formData);
      setFormData(initialValue);
      navigate('/');
    } catch (error) {
      console.error('Error adding vendor:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Vendor Registration Form</Typography>

      {/* Add your other form controls here based on the vendor object properties */}
      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          onChange={handleInputChange}
          name="name"
          value={formData.name}
          id="name"
        />
      </FormControl>

      {/* Add other form controls as needed */}

      <FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default VendorRegistrationForm;