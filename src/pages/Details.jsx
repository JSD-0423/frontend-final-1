import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomBreadcrumbs from '../components/customBreadcrumbs/CustomBreadcrumbs'
import CustomContainer from '../components/customContainer/CustomContainer'

const Details = () => {
    const breadcrumbsPages = [
        { pageName:'Home', path:'/'},
    ]
  return (
    <CustomContainer>
        <CustomBreadcrumbs pages={breadcrumbsPages} currentPage={'Details'} />
        <Typography variant='h1'>
            This is details page 
        </Typography>
    </CustomContainer>
  )
}

export default Details