import { Box } from '@mui/material'
import React from 'react'
import CustomContainer from '../customContainer/CustomContainer'

const CardsWrapper = ({children,wrapperHeight,wrapperBg, displayType}) => {
  return (
    <Box component='div' sx={{height:wrapperHeight, width:'100%', backgroundColor:wrapperBg, display:displayType}} mb={5}>
        <CustomContainer>
          {children}
        </CustomContainer>    
    </Box>
  )
}

export default CardsWrapper