import React from 'react'
import CardsWrapper from '../cardsWrapper/CardsWrapper'
import { Stack, useTheme } from '@mui/material'
import CardItem from '../cardItem/CardItem';
import CardsWrapperHeader from '../cardsWrapperHeader/CardsWrapperHeader';
import { Link } from 'react-router-dom';


const NewArrivals = () => {
    const theme = useTheme();
    let CardIemsObj = [
      {
        id:'Grande',
        productName:"Grande",
        productType:'Blossom Pouch',
        price:'$39.49',
        image:'https://images2.imgbox.com/38/dc/zwOWUdvF_o.png'
      },
      {
        id:'Coach',
        productName:"Coach",
        productType:'Leather Coach Bag',
        price:'$54.69',
        image:'https://images2.imgbox.com/de/04/cUdIOyc4_o.png'
      },
      {
        id:'Remus',
        productName:"Remus",
        productType:'Brown Strap Bag',
        price:'$57.00',
        image:'https://images2.imgbox.com/f8/d0/W1KOpcQ1_o.png'
      },
      {
        id:'Boujee',
        productName:"Boujee",
        productType:'Black Bag',
        price:'$56.49',
        image:'https://images2.imgbox.com/9b/2f/gl7x6OYs_o.png'
      }
    ]
  return (
    <CardsWrapper >
      <CardsWrapperHeader wrapperTitle={'New Arrivals'} fontColor={theme.palette.dark.main} WrapperGoToIcon={['NavigateNextOutlinedIcon']} WrapperPseudoIconId={'NavigateNextOutlinedIcon'} />
        <Stack direction="row" justifyContent='space-between' flexWrap='nowrap' spacing={{xs:2, md:3}} overflow='auto' >
          {CardIemsObj.map((card)=>{
            return <Link key={card.id} style={{textDecoration:'none'}} to='/product-details'>
                    <CardItem  cardWidth={{xs:'136px' , md:'286px'}} fontColor={theme.palette.typeHightEmphasis.main} imageHeight={{xs:'138px',md:'286px'}} imageWidth={'100%'} imageBorderRadius={'10px'} imageObjectFit={'cover'} productName={card.productName} productType={card.productType} price={card.price} icons={['FavoriteBorderOutlinedIcon']} cardItemPseudoIconId={'FavoriteBorderOutlinedIcon'} image={card.image}/>
                  </Link>
          })}
        </Stack>
    </CardsWrapper>
  )
}

export default NewArrivals