import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
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
            color:theme.palette.typeLowEmphasis.main
        },
        pSpecialOffer:{
            fontSize:'20px',
            fontWeight:'600',
            lineHeight:'normal',
            color:'#FF404B'
        }
    }
  return (
    <Box width='50%' justifyContent='flex-end'>
        <Box mb={4}>
            <Typography variant='h1' fontSize='34px' lineHeight='44px' fontWeight='600' color={theme.palette.dark.main}>
                {pName}
            </Typography>
            <Typography color={theme.palette.typeLowEmphasis.main} fontSize='20px' lineHeight='26px' fontWeight='600'>
                {pDesc}
            </Typography>
        </Box>
        <Box width='268px' height='24px' mb={3}>
            {pRating}
        </Box>

        <Box width='179px' height='30px'>

        </Box>
        <AvailablePrices pPrice={pPrice} pOldPrice={pOldPrice} pSpecialOffer={pSpecialOffer} fontStyles = {PricesStylesObj} />
        <Stack mt={5} direction='row' width='100%' height='44px' spacing={3}>
            <Button variant='contained' sx={{width:'328px'}}  >
                <IconBtn iconsNames={['LocalMallOutlinedIcon']} iconJustifyContent={'center'} iconColor={theme.palette.bright.main} iconBackgroundColor={'transparent'} disableRippleEffect={true} ></IconBtn>
                <Typography ml={1} color={theme.palette.bright.main}>
                    Add to bag
                </Typography>
            </Button>
            <Button variant="outlined" sx={{width:'328px',border:`1px solid ${theme.palette.primary.main}`, '&:hover':{backgroundColor:'rgb(53 58 61 / 14%)'}}}>
                <IconBtn iconsNames={['FavoriteBorderOutlinedIcon']} iconJustifyContent={'center'} iconColor={theme.palette.primary.main} iconBackgroundColor={'transparent'} disableRippleEffect={true} ></IconBtn>
                <Typography ml={1} color={theme.palette.primary.main}>
                    Add to bag
                </Typography>
            </Button>
        </Stack>
    </Box>
  )
}

export default ProductDescription