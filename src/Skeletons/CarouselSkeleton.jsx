import { Skeleton } from '@mui/material'
import React from 'react'

const CarouselSkeleton = ({height}) => {
  return (
    <Skeleton variant="rounded" width='100%' height={height} />
  )
}

export default CarouselSkeleton