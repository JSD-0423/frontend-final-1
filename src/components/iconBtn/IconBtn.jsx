import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { IconButton, Stack } from '@mui/material';

const iconsMap = {
    "FavoriteBorderOutlinedIcon": FavoriteBorderOutlinedIcon,
    "PermIdentityOutlinedIcon": PermIdentityOutlinedIcon,
    "LocalMallOutlinedIcon": LocalMallOutlinedIcon,
    "LocalHospitalOutlinedIcon":LocalHospitalOutlinedIcon,
    "NotificationsNoneOutlinedIcon":NotificationsNoneOutlinedIcon,
    "SearchOutlinedIcon":SearchOutlinedIcon,
    "NavigateNextOutlinedIcon":NavigateNextOutlinedIcon
  }

const IconBtn = ({iconsNames,iconColor,iconPadding, iconSize ,iconPosition,pseudoIconId,pseudoType,pseudoContent,pseudoPosition,pseudoTopPos,pseudoRightPos,pseudoLeftPos,pseudoBottomPos,pseudoWidth,pseudoHeight,pseudoBorder,pseudoBorderRadius,pseudoBackgroundColor,pseudoZIndex}) => {
  console.log(iconColor)
  return (
    <Stack direction="row" height="24px" width="114px">
      {iconsNames.map( (IconName) =>{ 
        const Icon = iconsMap[IconName];

        let styles = {
          position:iconPosition,
          color:iconColor,
          padding:iconPadding,
          fontSize:iconSize
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
          return <IconButton key={IconName}  sx={styles}><Icon sx={{fontSize:iconSize}} /></IconButton>
        }
        return <IconButton key={IconName} sx={{position:iconPosition, color:iconColor, padding:iconPadding,fontSize:iconSize}}><Icon /></IconButton>})
      
      }
    </Stack>
  )
}

export default IconBtn