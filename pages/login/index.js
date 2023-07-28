import React, { useContext, useEffect } from "react";
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

import {AuthContex} from '../../context/auth';
import { useRouter } from "next/router";



export default function login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { login, user } = useContext(AuthContex);
const router = useRouter();
useEffect(() => {
  if (user) {
    //route to feeds page
    router.push("/");

  }
},[user]);     // used 3rd variation of life cycle method
  let handleClick = async ()=> {
    try{
      console.log(email);
      console.log(password);
      setLoading(true);
      setError('');
      await login(email,password);
      console.log("logged in");

    }
    catch (err) {
      console.log("getting error", JSON.stringify(err));
     setError("You have entered wrong password please check and try again")
      // setError(err.code);        // it is for system error
      // use setTimeOut to remove error after showing 2sec
      setTimeout(() => {
        setError('');
      }, 5000);
    }
    setLoading(false);
  }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    {/* div for error handling when email and password is not correct */}
    {
      error!= "" &&
    <div style={{color:'red'}}>{error}</div>
    }
        {/* this button for the login click */}
        <Button
        style={{marginTop:'1rem'}}
        variant="contained"  
        component="label" 
        fullWidth 
        onClick={handleClick}
        disabled = {loading}
        >
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
