import {Box} from "@mui/material";
import img from "./backgroundFigure.svg"

function BackgroundFigure(){
  return (
    <Box sx={{
      position: 'absolute',
      width: {
        xl: '1000px',
        lg: '800px',
        md: '600px'
      },
      top: '60px',
      zIndex: 1,
      right: {
        xl: '110px',
        lg: '140px',
        md: '140px'
      },
    }}>
      <img src={img} alt=''/>

    </Box>
  )
}

export default BackgroundFigure