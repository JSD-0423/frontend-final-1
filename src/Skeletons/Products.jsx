import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <>
      {Array.from(new Array(5)).fill(
        <Stack display="flex" justifyContent="space-between" flexWrap="nowrap">
          <Skeleton variant="rectangular" width={210} height={200} />
          <Box
            sx={{
              pt: 0.5,
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box width="100%">
              <Skeleton width="40%" />
              <Skeleton width="50%" />
              <Skeleton width="40%" />
            </Box>
            <Skeleton width="12%" variant="circular" />
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Products;
