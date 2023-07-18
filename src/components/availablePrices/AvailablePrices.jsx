import { Stack, Typography } from '@mui/material'
import React from 'react'

const AvailablePrices = ({pSpecialOffer,pOldPrice,pPrice,fontStyles}) => {
  return (
    <Stack spacing={2} direction='row' alignItems='center' width='100%' height='52px'>
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