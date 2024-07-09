import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Paper, Grid, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [user_name, setuser_name] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        
        // Simulating a successful login
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_name, password }),
        });

        if (!response.ok) {
          throw new Error('Authentication failed');
        }

        console.log(response);
        const data = await response.json();
        console.log(data);
        const userId = data.id;

        sessionStorage.setItem('userId',userId);

        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });

        navigate('/order');
      } catch (error) {
        console.error('Login failed:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!user_name.trim()) {
      validationErrors.user_name = 'user_name is required';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    return validationErrors;
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/featured/?coffee)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="100%"
          sx={{ backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900]) }}
        >
          <Grid item xs={12} sm={8} md={6}>
            <Avatar sx={{ margin: 1, backgroundColor: '#1976D2' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user_name"
                label="user_name"
                name="user_name"
                autoComplete="user_name"
                autoFocus
                value={user_name}
                onChange={(e) => setuser_name(e.target.value)}
                error={Boolean(errors.user_name)}
                helperText={errors.user_name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#1976D2' }}>
                Login
              </Button>
            </form>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/registration" style={{ textDecoration: 'none', color: '#1976D2' }}>
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
    </Grid>
  );
};

export default Login;