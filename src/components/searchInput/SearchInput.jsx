import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Paper } from '@mui/material';

const SearchInput = ({searchInputParentBg,searchInputBg,searchInputParentBorder,searchInputBorder,searchInputParentBoxShadow,placeholderValue,searchInputValue,searchInputParentWidth,searchInputWidth,searchInputType,searchInputPadding,searchInputHeight,searchInputParentHeight, setIsSearching}) => {
  
  const debounce = (fn,delay) => {
    let timerId;
    return (...args) =>{
      if(timerId){
        clearTimeout(timerId);
      }
      timerId=setTimeout(()=>{
        fn(...args);
        timerId=null;
      },delay)
    } 
  }

  const debouncedSetIsSearching = debounce(() => setIsSearching(true), 300);

  const handleChange = (e) =>{
    if(e.target.value===''){
      setIsSearching(false)
    }else{
      debouncedSetIsSearching();
    }
  }
  
  return (
    <Paper component='form' sx={{ border:searchInputParentBorder, backgroundColor:searchInputParentBg, boxShadow:searchInputParentBoxShadow, display:"flex", alignItems:"center", width:searchInputParentWidth, height:searchInputParentHeight, position:"relative"}}>
        <Search sx={{position:"absolute", top:'10px', left:'10px'}} />
        <input onKeyUp={(e)=>handleChange(e)} style={{backgroundColor:searchInputBg, border:searchInputBorder, width:searchInputWidth, height:searchInputHeight, padding:searchInputPadding}} placeholder={placeholderValue} value={searchInputValue} type='search' />
    </Paper>
  )
}

export default SearchInput