import {Box} from "@mui/material";
import FooterLink from "../FooterLink";

function Footer(){
  return (
    <Box sx={{
      marginTop: {
        md: '120px',
        xs: '60px'
      },
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }}>
      <FooterLink href='https://github.com/ry111888' linkName='github'/> / 
      <FooterLink href='https://www.linkedin.com/in/yi-ren-63087a252/' linkName='linkedin'/>
    </Box>
  )
}

export default Footer