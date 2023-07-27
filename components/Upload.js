import React from 'react'
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
export default function jfasfkaskl() {
  return (
    <div className='upload-btn'>
         <Button 
        color="secondary"
        variant="outlined"  
        component="label"
        size="large"
        startIcon={<MovieIcon/>}
          >
          Upload Video
          <input hidden accept="*" multiple type="file"/>
        </Button> 
        <LinearProgress
        color="secondary"
        variant="determinate" 
        value={10} 
        style={{marginTop:"0.2rem"}} />
        </div>
  );
}
