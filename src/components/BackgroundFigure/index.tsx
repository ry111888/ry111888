import {Box} from "@mui/material";

function BackgroundFigure(){
  return (
    <Box style={{
      position: 'absolute',
      width: '1000px',
      top: '60px',
      zIndex: 1,
      right: '110px',
    }}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ECC6C3" d="M42.2,-61.3C56.7,-56.3,72,-48.1,78.8,-35.3C85.7,-22.6,84.3,-5.3,78.3,8.7C72.3,22.8,61.8,33.6,51.3,42.7C40.7,51.7,30.1,58.9,17.8,64.3C5.5,69.6,-8.5,73,-18.9,68.2C-29.4,63.4,-36.3,50.4,-45.5,39.5C-54.7,28.7,-66.2,19.9,-73.7,6.9C-81.3,-6,-84.9,-23.2,-77.3,-33.4C-69.7,-43.6,-50.9,-46.8,-36.2,-51.7C-21.4,-56.6,-10.7,-63.3,1.6,-65.7C13.8,-68.2,27.7,-66.4,42.2,-61.3Z" transform="translate(100 100)" />
      </svg>
    </Box>
  )
}

export default BackgroundFigure