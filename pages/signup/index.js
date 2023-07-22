import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import insta from "../../assets/instagram.jpeg";
import Button from '@mui/material/Button';
export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <Image src={insta} />
        {/* Text area for the Email */}
        <TextField
          size="small"
          margin="dense"
          id="outlined-basic"
          fullWidth
          label="Email"
          variant="outlined"
        />
        {/* Text area for the Password */}
        <TextField
          size="small"
          margin="dense"
          id="outlined-basic"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
        />
        {/* Text area for the full name */}
        <TextField
          size="small"
          margin="dense"
          id="outlined-basic"
          fullWidth
          label="Full Name"
          variant="outlined"
        />
        {/* this is button for the upload and hidden the image url */}
        <Button variant="outlined" fullWidth 
        component="label" style={{marginTop:'1rem'}}>
            <input type="file" accept="img/*"
            style={{display:'none', marginRight:'0.5rem'}}/>
          Upload
        </Button>

        {/* this button for the signup click */}
        <Button variant="contained"  
        fullWidth
        component="span" style={{marginTop:'1rem'}}>
          Sign up
        </Button>
      </div>
      <div className="bottom-card">
        Already Have an Account? 
        <span style={{color:'blue'}}>
          Log In
          </span>
      </div>
    </div>
  );
}
