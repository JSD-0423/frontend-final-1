import { Box, Breadcrumbs, Link, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CustomBreadcrumbs = () => {
  const theme = useTheme();
  const location = useLocation();
  let pages =['/'];
  const crumbs = location.pathname.split('/').filter(crumb => crumb); 
  crumbs.forEach((crumb)=>{
    pages.push(crumb);
  })
  return (
    <Box mb={5} display={(pages.length!==1 && 'block') || 'none'}>
      <Breadcrumbs separator={<ChevronRightIcon sx={{color:theme.palette.dark.main}} />} aria-label='breadcrumb'>
        {pages.map((page,index)=>{
          return (
            (pages.length!==1 && index!==pages.length-1 && 
            <Link key={page==='/'&& 'home'}  underline='hover' href={page}>
            {(page==='/' && 'Home') || page}
            </Link>)
          )
        })}
        <Typography color={theme.palette.dark.main}>
          {(pages[pages.length-1]==='/' && '') || pages[pages.length-1]}
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default CustomBreadcrumbs