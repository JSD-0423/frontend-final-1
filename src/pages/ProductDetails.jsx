import React from 'react'
import CustomContainer from '../components/customContainer/CustomContainer'
import ProductDescription from '../components/productDescription/ProductDescription'
import { Box, Stack } from '@mui/material'
import ThumbCarousel from '../components/thumbsCarousel/ThumbsCarousel'

const ProductDetails = () => {
  return (
    <CustomContainer>
      <Stack direction='row' flexWrap='nowrap'>
        <Box width='605px'>
          <ThumbCarousel productImages={[]} />
        </Box>
          <ProductDescription pName={'Coach'} pDesc={'Leather Coach Bag with adjustable starps.'} pPrice={'$54.69'} pOldPrice={'$78.66'} pSpecialOffer={'50%OFF'} pRating={4} />
      </Stack>
    </CustomContainer>
  )
}

export default ProductDetails