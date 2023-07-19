import { Grid, useTheme } from '@mui/material'
import React from 'react'
import CardItem from '../cardItem/CardItem';
import { Link } from 'react-router-dom';
import AvailablePrices from '../availablePrices/AvailablePrices';
import { Box, height, margin, width } from '@mui/system';

const ProductListing = () => {
    const theme = useTheme();
    let CardIemsObj = [
        {
          id: "1",
          productName: "Grande",
          productType: "Blossom Pouch",
          price: "$39.49",
          image: "https://images2.imgbox.com/38/dc/zwOWUdvF_o.png",
        },
        {
          id: "2",
          productName: "Coach",
          productType: "Leather Coach Bag",
          price: "$54.69",
          image: "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
        },
        {
          id: "3",
          productName: "Remus",
          productType: "Brown Strap Bag",
          price: "$57.00",
          image: "https://images2.imgbox.com/f8/d0/W1KOpcQ1_o.png",
        },
        {
          id: "4",
          productName: "Boujee",
          productType: "Black Bag",
          price: "$56.49",
          image: "https://images2.imgbox.com/9b/2f/gl7x6OYs_o.png",
        },
        {
            id: "5",
            productName: "Grande",
            productType: "Blossom Pouch",
            price: "$39.49",
            image: "https://images2.imgbox.com/38/dc/zwOWUdvF_o.png",
          },
          {
            id: "6",
            productName: "Coach",
            productType: "Leather Coach Bag",
            price: "$54.69",
            image: "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
          },
          {
            id: "7",
            productName: "Remus",
            productType: "Brown Strap Bag",
            price: "$57.00",
            image: "https://images2.imgbox.com/f8/d0/W1KOpcQ1_o.png",
          },
          {
            id: "8",
            productName: "Boujee",
            productType: "Black Bag",
            price: "$56.49",
            image: "https://images2.imgbox.com/9b/2f/gl7x6OYs_o.png",
          },
          {
            id: "9",
            productName: "Grande",
            productType: "Blossom Pouch",
            price: "$39.49",
            image: "https://images2.imgbox.com/38/dc/zwOWUdvF_o.png",
          },
        
      ];

      const PricesStylesObj = {
        pPrice:{
            fontSize: {xs:'14px', md:'16px'},
            fontWeight:{xs:'600', md:'500'},
            lineHeight:'normal',
            color:theme.palette.dark.main
        },
        pOldPrice:{
            fontSize:{xs:'10px', md:'14px'},
            fontWeight:{xs:'500', md:'400'},
            lineHeight:'normal',
            textDecoration:'line-through',
            color:theme.palette.lightText.main
        },
        pSpecialOffer:{
            fontSize:{xs:'10px', md:'16px'},
            fontWeight: {xs:'500', md:'400'},
            lineHeight:'normal',
            color:'#FF404B'
        }
    }
  return (
    <Box display='grid' gap={{ xs: "25px 22px", md: "87px 31px" }}  gridTemplateColumns={{xs:'repeat(2 , 1fr)', md:"repeat(4 , 1fr)" }} >
        {CardIemsObj.map((card)=>{
            return (<Link key={card.id} style={{textDecoration: "none", display:'inline-block', width:{xs:'100%', md:'100%', lg:'286px'}, height:'fit-content'}} to='/product-details'>
                            <CardItem 
                                cardWidth={'100%'} 
                                imageHeight={'100%'} 
                                imageWidth={'100%'} 
                                imageBorderRadius={"10px"} 
                                imageObjectFit={"cover"} 
                                productName={card.productName}
                                productType={card.productType}
                                prices={<AvailablePrices pPrice={card.price} pOldPrice={'$78.66'} pSpecialOffer={'50%OFF'} fontStyles={PricesStylesObj} location={'category-page'} />}
                                icons={["FavoriteBorderOutlinedIcon"]}
                                cardItemPseudoIconId={"FavoriteBorderOutlinedIcon"}
                                image={card.image}
                                fontColor={theme.palette.typeHighEmphasis.main}
                                ratingStars={true}
                                pRating={4}
                                location={'category-page'}
                            />

                        </Link>)

        })}
    </Box>
  )
}

export default ProductListing