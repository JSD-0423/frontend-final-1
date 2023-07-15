import { Box, Breadcrumbs, Link, Typography, useTheme } from '@mui/material'
import React from 'react'

const CustomBreadcrumbs = ({pages,currentPage}) => {
  const theme = useTheme();
  return (
    <Box>
      <Breadcrumbs aria-label='breadcrumb'>
        {pages.map((page)=>{
          return <Link underline='hover' href={page.path}>
                    {page.pageName}
                  </Link>
        })}
        <Typography color={theme.palette.dark.main}>
          {currentPage}
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default CustomBreadcrumbs