import React from 'react'
import CardsWrapper from '../cardsWrapper/CardsWrapper'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import IconBtn from '../iconBtn/IconBtn';


const NewArrivals = () => {
    const theme = useTheme();
  return (
    <CardsWrapper wrapperHeight={'475px'} >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography fontSize='34px' fontWeight='600' lineHeight="44px" color="black" component='h2'>New Arrivals</Typography>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='caption' fontWeight='600' lineHeight='24px' color={theme.palette.primary.main}>View All</Typography>
                <IconBtn iconsNames={["NavigateNextOutlinedIcon"]} pseudoIconId={'NavigateNextOutlinedIcon'} iconPadding={0} iconSize={'30px'} iconColor={"black"} pseudoType={'&:hover'} pseudoBackgroundColor='transparent' />
            </Stack>
        </Stack>
    </CardsWrapper>
  )
}

export default NewArrivals