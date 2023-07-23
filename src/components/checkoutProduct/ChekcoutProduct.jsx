import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ChekcoutProduct = ({src, pName, pDetails, pQuantity, styles}) => {
  return (
    <Stack direction='row' spacing={2}>
        <Box component='img' src={src} width='75px' height='80px' sx={{verticalAlign:'middle', objectFit:'cover'}} />
        <Stack direction='column'>
            <Typography gutterBottom sx={{...styles.pName}}  >
                {pName}
            </Typography>
            <Typography gutterBottom sx={{...styles.pDetails}} >
                {pDetails}
            </Typography>
            <Typography sx={{...styles.pQuantity}}>
                {pQuantity}
            </Typography>
        </Stack>
    </Stack>
  )
}

export default ChekcoutProduct