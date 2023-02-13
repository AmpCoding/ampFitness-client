import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

const Footer = () => {
//     function Copyright(props) {
//     return (
//       <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
  return (
    <div>
        {/* <h1>Footer</h1> */}
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />

        {/* <Copyright sx={{ mt: 5 }} /> */}
    </div>
  )
}

export default Footer