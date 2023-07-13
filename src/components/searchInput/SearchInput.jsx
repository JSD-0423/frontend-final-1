import React from 'react';
import { Search } from '@mui/icons-material';
import { Paper } from '@mui/material';

const SearchInput = ({searchInputParentBg,searchInputBg,searchInputParentBorder,searchInputBorder,searchInputParentBoxShadow,placeholderValue,searchInputValue,searchInputParentWidth,searchInputWidth,searchInputType,searchInputPadding,searchInputHeight,searchInputParentHeight}) => {
  return (
    <Paper component='form' sx={{ border:searchInputParentBorder, backgroundColor:searchInputParentBg, boxShadow:searchInputParentBoxShadow, display:"flex", alignItems:"center", width:searchInputParentWidth, height:searchInputParentHeight, position:"relative"}}>
        <Search sx={{position:"absolute", top:'10px', left:'10px'}} />
        <input style={{backgroundColor:searchInputBg, border:searchInputBorder, width:searchInputWidth, height:searchInputHeight, padding:searchInputPadding}} placeholder={placeholderValue} value={searchInputValue} type={searchInputType} />
    </Paper>
  )
}

export default SearchInput