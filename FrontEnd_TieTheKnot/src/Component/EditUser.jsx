import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    catering_services: '',
    decoration: '',
    location: '',
    name: '',
    photography_services: '',
    wedding_date: '',
    wedding_venue: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
    }
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { catering_services, decoration, location, name, photography_services, wedding_date, wedding_venue } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {
        const response =  await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="catering-services-input">Catering Services</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='catering_services' value={user.catering_services} id="catering-services-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="decoration-input">Decoration</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='decoration' value={user.decoration} id="decoration-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="location-input">Location</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='location' value={user.location} id="location-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="name-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="photography-services-input">Photography Services</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='photography_services' value={user.photography_services} id="photography-services-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="wedding-date-input">Wedding Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='wedding_date' value={user.wedding_date} id="wedding-date-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="wedding-venue-input">Wedding Venue</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='wedding_venue' value={user.wedding_venue} id="wedding-venue-input" />
            </FormControl>
            <FormControl>
                <Link to="/all"><Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button></Link>
            </FormControl>
        </Container>
    )
}

export default EditUser;