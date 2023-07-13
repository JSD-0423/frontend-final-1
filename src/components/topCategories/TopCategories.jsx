import React from 'react'
import CardsWrapper from '../cardsWrapper/CardsWrapper'
import CardsWrapperHeader from '../cardsWrapperHeader/CardsWrapperHeader'
import { Box, Typography } from '@mui/material'

const TopCategories = ({collections}) => {
  return (
    <CardsWrapper wrapperHeight={'106px'} displayType={{sx:'block',md:'none'}}>
        <Box>
            <Typography variant='h2' fontWeight='600' fontSize='14px' lineHeight='16px' >
                Top Categories
            </Typography>
        </Box>
        <Slack>
            {collections.map((collection)=>{
                
            })}
        </Slack>
    </CardsWrapper>
  )
}

export default TopCategories