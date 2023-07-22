import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import logo from "../../assets/instagram.jpeg";
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
// for background image
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import bg4 from '../../assets/bg4.jpg';
import bg5 from '../../assets/bg5.jpg';
export default function login() {
  return (
    <div className="login-container">

        <div className="insta-mob-bg">
          <div className="carousel">
          <Carousel className="set"
          autoPlay 
          interval="2000"
          infiniteLoop 
          showArrows = {false}
          showIndicators="false"
          stopOnHover
          >
                <Image src={bg1} />
                <Image src={bg2} />
                <Image src={bg3} />
                <Image src={bg4} />
                <Image src={bg5} />
            </Carousel>
          </div>
        </div>
        <div>
      <div className="login-card">
        <Image src={logo} />
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
      </div>
  );
}
