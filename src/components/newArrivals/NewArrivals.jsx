import React from 'react'
import CardsWrapper from '../cardsWrapper/CardsWrapper'
import { Stack, Typography, useTheme } from '@mui/material'
import IconBtn from '../iconBtn/IconBtn';
import CardItem from '../cardItem/CardItem';
import CardsWrapperHeader from '../cardsWrapperHeader/CardsWrapperHeader';


const NewArrivals = () => {
    const theme = useTheme();
    let CardIemsObj = [
      {
        id:'Grande',
        productName:"Grande",
        productType:'Blossom Pouch',
        price:'$39.49',
        image:'/images/pink-bag-small-2.png'
      },
      {
        id:'Coach',
        productName:"Coach",
        productType:'Leather Coach Bag',
        price:'$54.69',
        image:'/images/duffle-1.png'
      },
      {
        id:'Remus',
        productName:"Remus",
        productType:'Brown Strap Bag',
        price:'$57.00',
        image:'/images/irene-kredenets-tcVH_BwHtrc-unsplash-2.png'
      },
      {
        id:'Boujee',
        productName:"Boujee",
        productType:'Black Bag',
        price:'$56.49',
        image:'/images/BLACK-BAG 1.png'
      }
    ]
  return (
    <CardsWrapper wrapperHeight={'475px'} >
      <CardsWrapperHeader wrapperTitle={'New Arrivals'} fontColor={theme.palette.dark.main} WrapperGoToIcon={['NavigateNextOutlinedIcon']} WrapperPseudoIconId={'NavigateNextOutlinedIcon'} />
        <Stack direction="row" justifyContent='space-between' flexWrap='nowrap' >
          {CardIemsObj.map((card)=>{
            return <CardItem key={card.id} cardWidth={'286px'} imageHeight={'286px'} imageWidth={'100%'} imageBorderRadius={'10px'} imageObjectFit={'cover'} productName={card.productName} productType={card.productType} price={card.price} icons={['FavoriteBorderOutlinedIcon']} cardItemPseudoIconId={'FavoriteBorderOutlinedIcon'} image={card.image}/>
          })}
        </Stack>
    </CardsWrapper>
  )
}

export default NewArrivals