import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import insta from "../../assets/instagram.jpeg";
import Button from '@mui/material/Button';
export default function login() {
  return (
    <div className="login-container">
        
      <div className="login-card">
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
    {/* div for error handling when email and password is not correct */}
    <div style={{color:'red'}}>Show Error if email or password is incorrect</div>
        {/* this button for the login click */}
        <Button variant="contained"  
        fullWidth
        component="span" style={{marginTop:'1rem'}}>
          LogIn
        </Button>
      {/* taking a div to set the forget password if user don't have remembered password */}
      <div style={{color:'blue', marginTop:'0.5rem'}}>Forget Password?</div>
      </div>
      <div className="bottom-card">
        Don't Have an Account? 
        <span style={{color:'blue'}}>
          SignUp
          </span>
      </div>
    </div>
  );
}
