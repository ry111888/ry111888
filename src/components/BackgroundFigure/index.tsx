import {Box} from "@mui/material";
import img from "./backgroundFigure.svg"

function BackgroundFigure(){
  return (
    <Box style={{
      position: 'absolute',
      width: '1000px',
      top: '60px',
      zIndex: 1,
      right: '110px',
    }}>
      <img src={img} alt=''/>

    </Box>
  )
}

export default BackgroundFigure