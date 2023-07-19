import React from 'react'

import {CustomContainer,ProductListing} from "../components";
import { Box } from '@mui/material';

const Category = () => {
  return (
    <CustomContainer>
        <Box mb={{xs:2, md:5}} width='100%' height='100%'>
            <img style={{width:'100%', height:'100%'}} src="https://images2.imgbox.com/6f/5f/OBqCB0Ul_o.png" alt="black friday discount" />
        </Box>
        <ProductListing />
    </CustomContainer>
  )
}

export default Category