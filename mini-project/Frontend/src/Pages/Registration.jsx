import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/LocalCafe';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    contact_Number: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Called")
    if (formData.user_name && formData.email && formData.contact_Number && formData.password) {
      try {
        const response = await axios.post('http://localhost:3000/register', formData);
        
        if (response.status === 200) {
          setRegistrationSuccess(true);
          onRegister(formData);
          navigate('/home');
        } else {
          setRegistrationError('Registration failed. Please try again.');
        }
      } catch (error) {
        setRegistrationError('Registration failed. Please try again.');
        console.error('Registration failed:', error);
      }
    } else {
      console.error('All fields are required');
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/featured/?coffee)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#795548', 
      }}
    >
      <Paper
        elevation={5}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/featured/?coffee)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 255)', 
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CoffeeIcon sx={{ fontSize: 48, color: '#3e2723' }} />
        <Typography component="h1" variant="h5" sx={{ mt: 2, color: '#3e2723' }}>
          Coffee Shop Registration
        </Typography>
        <Box   component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="user_name"
            variant="outlined"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            variant="outlined"
            name="contact_Number"
            value={formData.contact_Number}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
            Register
          </Button>
          {registrationSuccess && (
            <Typography variant="body2" color="success" sx={{ mt: 2 }}>
              Registration successful! You can now{' '}
              <Link to="/login" style={{ color: '#4e342e', fontWeight: 'bold' }}>
                log in
              </Link>
              .
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default RegistrationForm;