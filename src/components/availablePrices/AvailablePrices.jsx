import { Stack, Typography } from '@mui/material'
import React from 'react'

const AvailablePrices = ({pSpecialOffer,pOldPrice,pPrice,fontStyles, location}) => {
  return (
    <Stack spacing={location === 'category-page' && {xs:1, md:1} || {xs:1, md:2}} direction='row' alignItems='center' width='100%' height={ location === 'category-page' && 'fit-content' || {xs:'16px', md:'52px'}} mb={location === 'category-page' && {xs:0} || {xs:2}}>
        <Typography variant='body1' sx={fontStyles.pPrice} >
            {pPrice}
        </Typography>
        <Typography variant='body1' sx={fontStyles.pOldPrice}>
            {pOldPrice}
        </Typography>
        <Typography variant='body1' sx={fontStyles.pSpecialOffer}>
            {pSpecialOffer}
        </Typography>
    </Stack>
  )
}

export default AvailablePrices