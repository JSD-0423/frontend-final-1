import { Box, Button, Rating, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import AvailablePrices from '../availablePrices/AvailablePrices';
import IconBtn from '../iconBtn/IconBtn';

const ProductDescription = ({pName, pDesc, pRating, pPrice, pOldPrice, pSpecialOffer}) => {
    const theme = useTheme();
    const PricesStylesObj = {
        pPrice:{
            fontSize:'40px',
            fontWeight:'700',
            lineHeight:'normal',
            color:theme.palette.dark.main
        },
        pOldPrice:{
            fontSize:'34px',
            fontWeight:'600',
            lineHeight:'normal',
            textDecoration:'line-through',
            color:theme.palette.lightText.main
        },
        pSpecialOffer:{
            fontSize:'20px',
            fontWeight:'600',
            lineHeight:'normal',
            color:'#FF404B'
        }
    }
  return (
    <Box width='814px'>
        <Box mb={4}>
            <Typography variant='h1' fontSize='34px' lineHeight='44px' fontWeight='600' color={theme.palette.dark.main}>
                {pName}
            </Typography>
            <Typography color={theme.palette.typeLowEmphasis.main} fontSize='20px' lineHeight='26px' fontWeight='600'>
                {pDesc}
            </Typography>
        </Box>
        <Stack direction='row' alignItems='center' spacing={1} flexWrap='nowrap' width='268px' height='24px' mb={3}>
            <Rating name="read-only" value={pRating} readOnly />
            <Typography color={theme.palette.lightText.main} fontWeight='400' fontSize='16px' lineHeight='20px'>
                {'(250) Ratings'}
            </Typography>
        </Stack>

        <Box width='179px' height='30px'>

        </Box>
        <AvailablePrices pPrice={pPrice} pOldPrice={pOldPrice} pSpecialOffer={pSpecialOffer} fontStyles = {PricesStylesObj} />
        <Stack mt={5} direction='row' width='100%' height='44px' spacing={3}>
            <Button variant='contained' sx={{width:'328px', textTransform:'none' , borderRadius:'8px'}}  >
                <IconBtn iconsNames={['LocalMallOutlinedIcon']} iconJustifyContent={'center'} iconColor={theme.palette.bright.main} iconBackgroundColor={'transparent'} disableRippleEffect={true} ></IconBtn>
                <Typography fontWeight='600' fontSize='14px' lineHeight='24px' ml={1} color={theme.palette.bright.main}>
                Add to bag
                </Typography>
            </Button>
            <Button variant="outlined" sx={{width:'240px', textTransform:'none' ,border:`2px solid ${theme.palette.primary.main}`, '&:hover':{backgroundColor:'rgb(53 58 61 / 14%)'} , borderRadius:'8px'}}>
                <IconBtn iconsNames={['FavoriteBorderOutlinedIcon']} iconJustifyContent={'center'} iconColor={theme.palette.primary.main} iconBackgroundColor={'transparent'} disableRippleEffect={true} ></IconBtn>
                <Typography fontWeight='600' fontSize='14px' lineHeight='24px' ml={1} color={theme.palette.primary.main}>
                Add To Wishlist
                </Typography>
            </Button>
        </Stack>
    </Box>
  )
}

export default ProductDescription