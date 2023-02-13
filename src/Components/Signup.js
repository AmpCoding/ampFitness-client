import React from 'react';
import { useState } from "react";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
// import "./Signup.css"
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          AMP Fitness
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const tiers = [
    {
      title: '30 Day Program',
      price: '100',
      description: [
        'Initial Assessment',
        'Meal Guide',
        'Fitness Regimen',
        'Weekly Tracking',
      ],
      buttonText: 'Sign up',
      buttonVariant: 'outlined',
    },
  ]
  const theme = createTheme();

const Signup = ({AddThisUser}) => {
    
    const [formInfo, setFormInfo] = useState({
        firstName:"",
        lastName:"",
        email:"",
        userName:"",
        password:"",
        height:"",
        weight:"",
        age:"",
        mealPlan:""
    })
    
    
    // const [meal, setMeal] = React.useState('');

    // const handleChange = (event) => {
    //     setMeal(...meal, [event.target.value]);
    // };
    function onInputChange(e){
        setFormInfo({...formInfo, [e.target.name]:e.target.value});
        
    }
    function onFormSubmit(e){
        e.preventDefault();
        AddThisUser(formInfo);
        setFormInfo({
            firstName:"",
            lastName:"",
            email:"",
            userName:"",
            password:"",
            height:"",
            weight:"",
            age:"",
            mealPlan:""  
        })
    }

  return (
    
    <div className='form'>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={onFormSubmit} noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname" 
                  onChange={onInputChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname" 
                  onChange={onInputChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email" 
                  onChange={onInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username" 
                  onChange={onInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password" 
                  onChange={onInputChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="height"
                  label="Height"
                  name="height" 
                  onChange={onInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="weight"
                  label="Weight"
                  name="weight" 
                  onChange={onInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age" 
                  onChange={onInputChange}
                  autoComplete="email"
                />
              </Grid>
              <FormControl variant="standard" sx={{ m: 2, minWidth: 500 }}>
                <InputLabel id="demo-simple-select-filled-label">Meal Plan</InputLabel>
                <Select
                    name="selection"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={formInfo.selection}
                    onChange={onInputChange}
                    >
                    <MenuItem value="Omnivore">
                        Omnivore
                    </MenuItem>
                    <MenuItem value="Pescatarian">Pescatarian</MenuItem>
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Vegan">Vegan</MenuItem>
                </Select>
            </FormControl>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
            onSubmit={onFormSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            ><Link href="/checkout" variant="body2">
              Sign Up
              </Link>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
        {/* <form onSubmit={onFormSubmit}>
            {/* <label>First Name</label> */}
            {/* <TextField id="filled-basic" label="First Name" variant="filled" name="firstname" onChange={onInputChange}/>
            {/* <label>Last Name</label> */}
            {/* <TextField id="filled-basic1" label="Last Name" variant="filled" name="lastname" onChange={onInputChange}/> */}
            {/* <label>Email</label> */}
            {/* <TextField id="filled-basic2" label="Email" variant="filled" name="email" onChange={onInputChange}/> */}
            {/* <label>Username</label> */}
            {/* <TextField id="filled-basic3" label="Username" variant="filled" name="username" onChange={onInputChange}/> */}
            {/* <label>Password</label> */}
            {/* <TextField id="filled-basic4" label="Password" variant="filled" type="password" name="password" onChange={onInputChange}/> */}
            {/* <label>Height</label> */}
            {/* <TextField id="filled-basic5" label="Height" variant="filled" name="height" onChange={onInputChange}/> */}
            {/* <label>Weight</label> */}
            {/* <TextField id="filled-basic6" label="Weight" variant="filled" name="weight" onChange={onInputChange}/> */}
            {/* <label>Age</label> */}
            {/* <TextField id="filled-basic7" label="Age" variant="filled" name="age" onChange={onInputChange}/> */} 
            {/* <label>Meal Plan</label>
            <select name="selection" onChange={onInputChange}>
                <option>Omnivore</option>
                <option>Pescatarian</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
            </select> */}
            {/* <FormControl variant="filled" sx={{ m: 0, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Meal Plan</InputLabel>
                <Select
                    name="selection"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={formInfo.selection}
                    onChange={onInputChange}
                    >
                    <MenuItem value="Omnivore">
                        Omnivore
                    </MenuItem>
                    <MenuItem value="Pescatarian">Pescatarian</MenuItem>
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Vegan">Vegan</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" type='submit'>Submit</Button>
        </form> */} 
    </div>
  )
}

export default Signup