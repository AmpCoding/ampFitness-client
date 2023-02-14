import React from 'react'
import { useState } from "react";
import "./Addimage.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Addimage() {
    const [formInfo, setFormInfo] = useState({
        title:"Front",
        description:"Day 6"
    })
    const [imageUrl, setImageUrl] = useState("");
    // const { user } = props;
    const cloud_name = "dwfy5hrmq";
    const upload_preset = "n0jczakh";
    async function handleClick(event) {
        event.preventDefault();
        console.log("handleclick");
        const { files } = document.querySelector(".app_uploadInput");
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", upload_preset);
        const options = {
        method: "POST",
        body: formData,
        };
        let res = await fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options
        )
        res = await res.json()
        console.log(res);
        // .then((res) => res.json())
        // .then((res) => console.log(res))
        // .then((res) => {
        setImageUrl(res.secure_url);
        // })
        
        // .catch((err) => console.log(err));
        let theBody = {
            imageName: res.secure_url,
            title: formInfo.title,
            description: formInfo.description

        }
        let res2 = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/portal/addimage`, {
            method: "POST",
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                //Key value pair, key name for the server to reference, then the information!
            body: JSON.stringify(theBody) 
        })
    ;}
    
    function onInputChange(e){
        setFormInfo({...formInfo, [e.target.name]:e.target.value});
    }
    // function onFormSubmit(e){
    //     e.preventDefault();
    //     AddThisImage(formInfo);
    // }
  return (
    <div className="app">
        {/* <h1>Welcome to your Progress Tracker!</h1> */}
        <form encType="multipart/form-data">
            <label htmlFor="angle">Select an angle:</label>
            <select id="myTitle" name="title" onChange={onInputChange}>
                <option>Front</option>
                <option>Back</option>
                <option>Right</option>
                <option>Left</option>
            </select>
            <label htmlFor="day">Select a day:</label>
            <select id="myDescription" name="description" onChange={onInputChange}>
                <option>Day 6</option>
                <option>Day 12</option>
                <option>Day 18</option>
                <option>Day 24</option>
                <option>Day 30</option>
                <option>Day 36</option>
                <option>Day 42</option>
                <option>Day 48</option>
                <option>Day 54</option>
                <option>Day 60</option>
                <option>Day 66</option>
                <option>Day 72</option>
                <option>Day 78</option>
                <option>Day 84</option>
                <option>Day 90</option>
            </select>
            {/* <input type="text" id="myTitle" name="title" placeholder="Enter title here" /> */}
            {/* <input type="text" id="myDescription" name="description" placeholder="Enter description here"/> */}
            {/* <input type="text" id="userId" name="userId" placeholder="User ID goes here"/> */}
            {/* <p>Click on the "Choose File" button to upload an image:</p>
            <input type="file" id="myFile" name="originalname" onChange={onInputChange}/>
            <button type="submit">Submit</button> */}
            
            <input type="file" className="app_uploadInput" name="originalname" onChange={onInputChange}/>
            <button className="app_uploadButton" onClick={handleClick}>Upload</button>
            {/* <img src={imageUrl} className="app_uploadedImg" alt="" /> */}
        </form>
        
    </div>
  )
};

// export default Addimage