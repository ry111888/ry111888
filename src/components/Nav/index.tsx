import {Box} from "@mui/material";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function Nav() {
  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Box>
        <Brightness5Icon/>
      </Box>
      <Box>
        <MenuIcon/>
      </Box>
    </Box>
  )
}

export default Nav