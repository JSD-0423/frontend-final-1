import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import IconBtn from '../iconBtn/IconBtn'

const CardItem = ({cardWidth, imageHeight, imageWidth, imageBorderRadius, imageObjectFit, productName, productType, price, icons, cardItemPseudoIconId, image}) => {
  const theme = useTheme();

  return (
    <Box component='div' width={cardWidth} >
      <Box component='div' width={imageWidth} height={imageHeight} mb={1}>
        <img style={{width:'100%', height:'100%', objectFit:imageObjectFit, verticalAlign:'middle', borderRadius:imageBorderRadius}} src={image} alt="product-image" />
      </Box>
      <Stack width="100%" direction='row' justifyContent='space-between'>
        <Box width="90%">
          <Typography variant='body1' noWrap fontWeight='500' fontSize='16px' lineHeight='20px' gutterBottom>{productName}</Typography>
          <Typography variant='body1' noWrap color={theme.palette.typeLowEmphasis.main} fontWeight='400' fontSize='14px' lineHeight='20px' gutterBottom>{productType}</Typography>
          <Typography variant='body1' noWrap fontWeight='500' fontSize='16px' lineHeight='20px' gutterBottom>{price}</Typography>
        </Box>
        <Box>
          <IconBtn iconsNames={icons} pseudoIconId={cardItemPseudoIconId} iconColor={theme.palette.dark.main} iconPadding={0} pseudoType={'&:hover'} pseudoBackgroundColor={'transparent'} />
        </Box>
      </Stack>
    </Box>
  )
}

export default CardItem