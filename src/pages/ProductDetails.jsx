import React from 'react'
import CustomContainer from '../components/customContainer/CustomContainer'
import ProductDescription from '../components/productDescription/ProductDescription'
import { Stack } from '@mui/material'

const ProductDetails = () => {
  return (
    <CustomContainer>
      <Stack direction='row' > 
        <ProductDescription pName={'Coach'} pDesc={'Leather Coach Bag with adjustable starps.'} pPrice={'$54.69'} pOldPrice={'$78.66'} pSpecialOffer={'50%OFF'} />
      </Stack>
    </CustomContainer>
  )
}

export default ProductDetails