import React from 'react'
import CardsWrapper from '../cardsWrapper/CardsWrapper'
import { Box, useTheme } from '@mui/material'
import FilterBasedCard from '../filterBasedCard/FilterBasedCard'
import CardsWrapperHeader from '../cardsWrapperHeader/CardsWrapperHeader'

const FilterBasedCollection = () => {
  const theme = useTheme();

  const filterCardsCollection = [
    {
      cardId:1,
      cardInfo:"limited edition products",
      imageUrl:{
        desktop:'https://images2.imgbox.com/4c/50/SdVeqLHx_o.png',
        mobile:'https://images2.imgbox.com/17/94/7sNiYkmp_o.png'
      }
    },
    {
      cardId:2,
      cardInfo:"15% off and more!",
      imageUrl:{
        desktop:'https://images2.imgbox.com/5b/98/kKo9O6NK_o.png',
        mobile:'https://images2.imgbox.com/79/63/7fEtwpCB_o.png'
      }
    },
    {
      cardId:3,
      cardInfo:"Popular in the community!",
      imageUrl:{
        desktop:'https://images2.imgbox.com/ff/32/VFERQnl5_o.png',
        mobile:'https://images2.imgbox.com/56/e5/h3dhTM3v_o.png'
      }
    }
  ]
  return (
    <CardsWrapper>
      <CardsWrapperHeader wrapperTitle={'Makeup & Skincare'} fontColor={theme.palette.typeHightEmphasis.main}  />
      <Box display='grid' gap={{xs:'16px 16px', md:'40px 32px'}} gridTemplateColumns='repeat(2 , 1fr)' sx={{gridTemplateAreas:`'card-1 card-1''card-2 card-3'`}}>
          {filterCardsCollection.map((card)=>{
            return  <Box key={card.cardId} height={{xs:(card.cardId===1 && '132px') || '100px', md:(card.cardId===1 && '400px') || '228px'}} gridArea={(card.cardId === 1 && 'card-1') || (card.cardId === 2 && 'card-2') || (card.cardId === 3 && 'card-3') } borderRadius='10px'  sx={{backgroundImage:{xs:`url(${card.imageUrl.mobile})`, sm:`url(${card.imageUrl.desktop})`}, backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%'}}  >
                      <FilterBasedCard  cardTitle={card.cardInfo}  iconName={['EastIcon']} />
                    </Box>
          })}
      </Box>
    </CardsWrapper>
  )
}

export default FilterBasedCollection;