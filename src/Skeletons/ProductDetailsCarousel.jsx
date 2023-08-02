import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

const ProductDetailsCarousel = () => {
  return (
    <Stack direction='column' width='100%' height='100%'>
        <Skeleton variant="rounded" width='100%' height='605px' />
        <Box width='100%' mt={1}>
            <Stack direction='row' justifyContent='space-between' m='auto' width='80%' spacing={2}>
                <Skeleton variant="rounded" width={75} height={75} />
                <Skeleton variant="rounded" width={75} height={75} />
                <Skeleton variant="rounded" width={75} height={75} />
                <Skeleton variant="rounded" width={75} height={75} />
            </Stack>
        </Box>
    </Stack>
  )
}

export default ProductDetailsCarousel