import React from 'react';
import {Box} from "@mui/material";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
  return (
    <Box style={{
      padding: '80px 162px',
    }}>
      <Nav/>
      <Content/>
    </Box>
  );
}

export default App;
