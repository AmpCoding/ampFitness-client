import React from 'react'
import Addimage from '../Components/Addimage';
import Imagecard from '../Components/Imagecard';
import { useState } from "react";
// import PropTypes from 'prop-types';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

const Portal = ({user, loggedIn}) => {
    // const { post } = props;
    // const [user, setUser] = useState({});
    const [images, setImages] = useState([]);
    console.log(user);
    console.log(loggedIn);
    // async function GetThisUser(id){
    //     let res = await fetch(`http://localhost:3005/api/user/${id}`);
    //     res = await res.json();
    //     console.log(res);
    //     // setUser(res.results);
    // }
    async function GetAllImages(){
        let res = await fetch("http://localhost:3005/api/portal/allimages");
        res = await res.json();
        console.log(res);
        setImages(res.results);
    }
    async function AddThisImage(image){
        console.log(image);
        let res = await fetch(`http://localhost:3005/api/portal/addimage`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(image)
        });
        res = await res.json();
        console.log(res);
        GetAllImages();
    }
    async function DeleteThisImage(id){
        let res = await fetch(`http://localhost3005/api/portal/images/delete/${id}`);
        res = await res.json();
        console.log(res);
        GetAllImages();
    }
  return (
    <div>
        <h1>Welcome to your Progress Tracker!</h1>

        <Addimage AddThisImage={AddThisImage}/>
        <Imagecard DeleteThisImage={DeleteThisImage}/>
        
    </div>
    
  )
}


export default Portal