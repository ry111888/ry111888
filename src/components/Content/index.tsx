import {Box, Typography} from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Content(){
  return (
    <Box sx={{
      marginTop: {
        md: '149px',
        sm: '90px'
      }
    }}>
      <Box style={{
        fontSize: '15px',
        fontWeight: 'bold',
      }}>
        HELLO!
      </Box>
      <Box sx={{
        fontSize: {
          xl: '96px',
          lg: '68px',
          md: '40px',
          sm: '30px'
        },
        width: {
          xl: '1168px',
          lg: '800px',
          md: '600px',
          xs: '100%'
        },
        lineHeight: {
          xl: '100px',
          lg: '80px',
          sm: '35px'
        },
        marginTop: '20px'
      }}>
        I'm
        <Typography component='span' sx={{
          fontSize: 'inherit',
          color: '#EC5239',
          marginLeft: {
            xs: '40px',
            xl: '40px',
            lg: '30px',
            md: '20px',
            sm: '12px'
          }
        }}>
          Yi Ren
        </Typography>
        <br/>
        Software Engineer & Frontend Developer
      </Box>
      <Box style={{
        marginTop: '30px'
      }}>
        <button style={{
          background: '#EC5239',
          height: '50px',
          width: '238px',
          border: 'none',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '15px',
          boxShadow: '0 5px 5px #aaa'
        }}>
          <Box style={{
            textDecoration: 'underline'
          }}>Show me your work!</Box>
          <Box style={{
            marginTop: '-3px',
            marginLeft: '6px'
          }}>
            <ArrowForwardIcon/>
          </Box>

        </button>
      </Box>
    </Box>
  )
}

export default Content