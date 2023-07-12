import { Box } from '@mui/material'
import React from 'react'
import CustomContainer from '../customContainer/CustomContainer'

const CardsWrapper = ({children,wrapperHeight,wrapperBg}) => {
  return (
    <Box component='div' sx={{height:wrapperHeight, width:'100%', backgroundColor:wrapperBg}}>
        <CustomContainer>
          {children}
        </CustomContainer>    
    </Box>
  )
}

export default CardsWrapper