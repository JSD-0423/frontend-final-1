import { Box, Breadcrumbs, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomContainer from '../customContainer/CustomContainer';
import style from './CustomBreadcrumbs.module.css'

const CustomBreadcrumbs = () => {
  const theme = useTheme();
  const location = useLocation();
  let pages =['/'];
  const crumbs = location.pathname.split('/').filter(crumb => crumb); 
  crumbs.forEach((crumb)=>{
    pages.push(crumb);
  })
  return (
    <CustomContainer>
      <Box mb={{xs:1, md:5}} display={(pages.length!==1 && 'block') || 'none'}>
        <Breadcrumbs separator={<ChevronRightIcon sx={{color:theme.palette.dark.main}} />} aria-label='breadcrumb'>
          {pages.map((page,index)=>{
            return (
              (pages.length!==1 && index!==pages.length-1 && 
              <Link className={style.bredcrumbLink} key={(page==='/'&& 'home') || page}  to={page}>
              {(page==='/' && 'Home') || page}
              </Link>)
            )
          })}
          <Typography color={theme.palette.dark.main}>
            {(pages[pages.length-1]==='/' && '') || pages[pages.length-1]}
          </Typography>
        </Breadcrumbs>
      </Box>
    </CustomContainer>
  )
}

export default CustomBreadcrumbs