import React from 'react';
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GymImage from "../images/sven-mieke-MsCgmHuirDo-unsplash.jpg"


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

const theme = createTheme();

export default function Login() {
// const {setUser, setLoggedIn} = props; 
const navigate = useNavigate();
const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
});
// const handleSubmit = (event) => {
// event.preventDefault();
// const data = new FormData(event.currentTarget);
// console.log(data);
// console.log({
// email: data.get('email'),
// password: data.get('password'),
// });
// };

function onInputChange(e){
    setLoginInfo({...loginInfo, [e.target.name]:e.target.value})
};

function onFormSubmit(e){
    e.preventDefault();
    Login(loginInfo);
};

async function Login(loginInfo){
    let res = await fetch(`http://localhost:3005/api/login/verification`, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application.json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
    });
    res = await res.json();
    // setUser(res);
    setLoginInfo(res);
    navigate("/profile");
}




return (
<ThemeProvider theme={theme}>
<Grid container component="main" sx={{ height: '100vh' }}>
<CssBaseline />
<Grid
item
xs={false}
sm={4}
md={7}
sx={{
backgroundImage: `url(${GymImage})`,
backgroundRepeat: 'no-repeat',
backgroundColor: (t) =>
t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
backgroundSize: 'cover',
backgroundPosition: 'center',
}}
/>
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
<Box
sx={{
my: 8,
mx: 4,
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
}}
>
<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Sign in
</Typography>
<Box component="form" noValidate onSubmit={onFormSubmit} sx={{ mt: 1 }}>
<TextField
onChange={onInputChange}
margin="normal"
required
fullWidth
id="email"
label="Email Address"
name="email"
autoComplete="email"
autoFocus
/>
<TextField
onChange={onInputChange}
margin="normal"
required
fullWidth
name="password"
label="Password"
type="password"
id="password"
autoComplete="current-password"
/>
<FormControlLabel
control={<Checkbox value="remember" color="primary" />}
label="Remember me"
/>
<Button
onSubmit={onFormSubmit}
type="submit"
fullWidth
variant="contained"
sx={{ mt: 3, mb: 2 }}
>
Sign In
</Button>
<Grid container>
<Grid item xs>
<Link href="#" variant="body2">
Forgot password?
</Link>
</Grid>
<Grid item>
<Link href="/programs" variant="body2">
{"Don't have an account? Sign Up"}
</Link>
</Grid>
</Grid>
<Copyright sx={{ mt: 5 }} />
</Box>
</Box>
</Grid>
</Grid>
</ThemeProvider>
);
}


// const Login = () => {
//   return (
//     <div>
//         <form>
//             <label>Username</label>
//             <input />
//             <label>Password</label>
//             <input />
//         </form>
//     </div>
//   )
// }

// export default Login

