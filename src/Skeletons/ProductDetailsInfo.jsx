import { Box, Divider, Skeleton, Stack } from '@mui/material'
import React from 'react'

const ProductDetailsInfo = () => {
  return (
    <Stack direction='column' spacing={[2,4]} width='100%' height={[300, 624]}>
        <Skeleton variant='text' sx={{fontSize:{ xs: "16px", md: "34px" }}} />
        <Skeleton variant='text' sx={{fontSize:{ xs: "14px", md: "20px" }}} />
        <Skeleton variant='text' sx={{fontSize:'24px'}} />
        <Skeleton variant='text' sx={{fontSize:'24px'}} />
        <Divider sx={{ mb: { xs: 2, md: 3 } }} />
        <Box width='100%'>
            <Skeleton variant='rounded' height={30} width={70} sx={{m:['0 auto',0]}} />
        </Box>
        <Stack direction='row' spacing={[2,3]}>
            <Skeleton variant='rounded' sx={{width:{ xs: "50%", md: "328px" }, height:'30px'}} />
            <Skeleton variant='rounded' sx={{width:{ xs: "50%", md: "328px" }, height:'30px'}} />
        </Stack>
    </Stack>
  )
}

export default ProductDetailsInfo