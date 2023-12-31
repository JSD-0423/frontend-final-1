import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const Products = ({width,height,numberOfItems}) => {
  return (
    <>
    {new Array(numberOfItems).fill(null).map((_, index) => (
      <Stack key={index} width={width} height={height}  direction='column' margin='auto' justifyContent="space-between" flexWrap="nowrap">
      <Skeleton variant="rounded" width='100%' height='100%' />
      <Box
        sx={{
          pt: 0.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box width="100%">
          <Skeleton width="40%" />
          <Skeleton width="50%" />
          <Skeleton width="40%" />
        </Box>
        <Skeleton width={20} height={20} variant="circular" />
      </Box>
    </Stack>
    ))}
    </>
  );
};

export default Products;
