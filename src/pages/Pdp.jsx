import React from 'react'
import CustomContainer from '../components/customContainer/CustomContainer'
import ProductDescription from '../components/productDescription/ProductDescription'
import { Stack } from '@mui/material'

const Pdp = () => {
  return (
    <CustomContainer>
      <Stack direction='row' > 
        <ProductDescription />
      </Stack>
    </CustomContainer>
  )
}

export default Pdp