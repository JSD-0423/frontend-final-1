import { Box } from '@mui/material'
import React from 'react'


const CustomContainer = ({children}) => {
  return (
    <Box component='div' sx={{padding:'0 24px', width:'100%', height:'100%'}}>
        {children}
    </Box>
  )
}

export default CustomContainer