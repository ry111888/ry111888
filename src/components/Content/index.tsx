import {Box} from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Content(){
  return (
    <Box style={{
      marginTop: '149px'
    }}>
      <Box style={{
        fontSize: '15px',
        fontWeight: 'bold',
      }}>
        HELLO!
      </Box>
      <Box style={{
        fontSize: '96px',
        width: '1168px',
        lineHeight: '100px',
        marginTop: '20px'

      }}>
        I'm
        <span style={{
          color: '#EC5239',
          marginLeft: '40px'
        }}>
          Yi Ren
        </span>
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