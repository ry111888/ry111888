import React from 'react';
import {Box} from "@mui/material";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import BackgroundFigure from "./components/BackgroundFigure";

function App() {
  return (
    <>
      <Box style={{
        position: 'relative',
        padding: '80px 162px',
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
