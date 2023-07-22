import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import insta from "../../assets/instagram.jpeg";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <Image src={insta} />
        {/* Text area for the Email */}
        <TextField
          id="outlined-basic"
          size="small"
          margin="dense"
          fullWidth
          label="Email"
          variant="outlined"
        />
        {/* Text area for the Password */}
        <TextField
          id="outlined-basic"
          size="small"
          margin="dense"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
        />
        {/* Text area for the full name */}
        <TextField
          id="outlined-basic"
          size="small"
          margin="dense"
          fullWidth
          label="Full Name"
          variant="outlined"
        />
        {/* this is button for the upload and hidden the image url */}
        <Button 
        color="secondary"
        variant="outlined" 
        fullWidth 
        component="label"
        size="small"
          >
        <input hidden type="file" accept="img/*"/>
        <IconButton color="secondary">
          <CloudUploadIcon/>
        </IconButton>
          Upload Profile Imgage
        </Button>

        <div className="tnc">
          By signing up, you agree to our Terms, Conditions and Cookies policy.
        </div>

        {/* this button for the signup click */}
        <Button 
        variant="contained"  
        fullWidth
        component="span" style={{marginTop:'0.5rem'}}>
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
