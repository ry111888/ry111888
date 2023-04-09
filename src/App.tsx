import React from 'react';
import {Box} from "@mui/material";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import BackgroundFigure from "./components/BackgroundFigure";

function App() {
  return (
    <>
      <Box sx={{
        position: 'relative',
        padding: {
          md: '80px 162px',
          sm: '40px 80px',
          xs: '20px 10px'
        },
        zIndex: 2

      }}>
        <Nav/>
        <Content/>
        <Footer/>

      </Box>
      <BackgroundFigure/>
    </>
  );
}

export default App;
