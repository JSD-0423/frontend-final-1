import { Box } from '@mui/material'
import React from 'react'


const CustomContainer = ({children}) => {
  return (
    <Box component='div' sx={{padding:{xs:'0 16px' , md:'0 20px'}, width:'100%', height:'100%'}}>
      {children}
    </Box>
  )
}

export default CustomContainer