import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import EastIcon from '@mui/icons-material/East';
import { IconButton, Stack } from '@mui/material';

const iconsMap = {
    "FavoriteBorderOutlinedIcon": FavoriteBorderOutlinedIcon,
    "PermIdentityOutlinedIcon": PermIdentityOutlinedIcon,
    "LocalMallOutlinedIcon": LocalMallOutlinedIcon,
    "LocalHospitalOutlinedIcon":LocalHospitalOutlinedIcon,
    "NotificationsNoneOutlinedIcon":NotificationsNoneOutlinedIcon,
    "SearchOutlinedIcon":SearchOutlinedIcon,
    "NavigateNextOutlinedIcon":NavigateNextOutlinedIcon,
    "EastIcon":EastIcon
  }

const IconBtn = ({iconsNames,iconWidth,iconHeight,iconJustifyContent,iconColor,iconBackgroundColor,iconPadding,iconMargin,iconSize,iconPosition,disableRippleEffect,pseudoIconId,pseudoType,pseudoContent,pseudoPosition,pseudoTopPos,pseudoRightPos,pseudoLeftPos,pseudoBottomPos,pseudoWidth,pseudoHeight,pseudoBorder,pseudoBorderRadius,pseudoBackgroundColor,pseudoZIndex}) => {
  return (
    <Stack direction="row" justifyContent={iconJustifyContent} width={iconWidth} height={iconHeight}>
      {iconsNames.map( (IconName) =>{ 
          const Icon = iconsMap[IconName];
          let styles = {
            position:iconPosition,
            color:iconColor,
            padding:iconPadding,
            margin:iconMargin,
            fontSize:iconSize,
            backgroundColor:iconBackgroundColor,
          }
          if(pseudoIconId===IconName){
            styles[pseudoType]={
              content:pseudoContent,
              position:pseudoPosition,
              top:pseudoTopPos,
              right:pseudoRightPos,
              left:pseudoLeftPos, 
              bottom:pseudoBottomPos, 
              width:pseudoWidth,
              height:pseudoHeight, 
              border:pseudoBorder, 
              borderRadius:pseudoBorderRadius,
              backgroundColor:pseudoBackgroundColor,
              zIndex:pseudoZIndex
            }
          }
          return <IconButton disableRipple={disableRippleEffect} key={IconName} sx={styles}><Icon sx={{fontSize:iconSize}} /></IconButton>
        })
        
      }
    </Stack>
  )
}

export default IconBtn