import React from "react";
import {
  Box,
  Button,
  Divider,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import {
  IconBtn,
  QuantityCounter,
  AvailablePrices,
  ScrollToTopLink,
} from "../shared/index";

const ProductDescription = ({
  pName,
  pDesc,
  pRating,
  pPrice,
  pOldPrice,
  pSpecialOffer,
}) => {
  const theme = useTheme();
  const PricesStylesObj = {
    pPrice: {
      fontSize: { xs: "20px", md: "40px" },
      fontWeight: { xs: "600", md: "700" },
      lineHeight: "normal",
      color: theme.palette.dark.main,
    },
    pOldPrice: {
      fontSize: { xs: "14px", md: "34px" },
      fontWeight: { xs: "500", md: "600" },
      lineHeight: "normal",
      textDecoration: "line-through",
      color: theme.palette.lightText.main,
    },
    pSpecialOffer: {
      fontSize: { xs: "14px", md: "20px" },
      fontWeight: { xs: "500", md: "600" },
      lineHeight: "normal",
      color: "#FF404B",
    },
  };
  return (
    <Box width={{ xs: "100%", md: "814px" }}>
      <Box mb={{ xs: 2, md: 4 }}>
        <Typography
          variant="h1"
          fontSize={{ xs: "16px", md: "34px" }}
          lineHeight={{ xs: "20px", md: "44px" }}
          fontWeight={{ xs: "500", md: "600" }}
          color={theme.palette.dark.main}
        >
          {pName}
        </Typography>
        <Typography
          color={theme.palette.typeLowEmphasis.main}
          fontSize={{ xs: "14px", md: "20px" }}
          lineHeight={{ xs: "18px", md: "26px" }}
          fontWeight={{ xs: "500", md: "600" }}
        >
          {pDesc}
        </Typography>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        flexWrap="nowrap"
        width="268px"
        height="24px"
        mb={{ xs: 2, md: 3 }}
      >
        <Rating name="read-only" value={pRating} readOnly />
        <Typography
          color={theme.palette.lightText.main}
          fontWeight="400"
          fontSize="16px"
          lineHeight="20px"
        >
          {"(250) Ratings"}
        </Typography>
      </Stack>
      <AvailablePrices
        pPrice={pPrice}
        pOldPrice={pOldPrice}
        pSpecialOffer={pSpecialOffer}
        fontStyles={PricesStylesObj}
      />
      <Divider sx={{ mb: { xs: 2, md: 3 } }} />
      <Box width="179px" height="30px">
        <QuantityCounter />
      </Box>
      <Stack
        mt={{ xs: 4, md: 5 }}
        direction="row"
        width="100%"
        height="44px"
        spacing={3}
      >
        <Button
          variant="contained"
          sx={{
            width: { xs: "50%", md: "328px" },
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          <IconBtn
            Icon={LocalMallOutlinedIcon}
            elementStyle={{ width: "fit-content" }}
            btnStyle={{
              justifyContent: "center",
              color: `${theme.palette.bright.main}`,
              backgroundColor: "transparent",
              padding: "0",
            }}
            disableRippleEffect={true}
          />
          <ScrollToTopLink to="/cart">
            <Typography
              width="fit-content"
              fontWeight="600"
              fontSize="14px"
              lineHeight="24px"
              ml={{ xs: 1, md: 1 }}
              color={theme.palette.bright.main}
            >
              Add to bag
            </Typography>
          </ScrollToTopLink>
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: { xs: "50%", md: "240px" },
            padding: "5px",
            textTransform: "none",
            border: `2px solid ${theme.palette.primary.main}`,
            "&:hover": {
              backgroundColor: "rgb(53 58 61 / 14%)",
              border: `2px solid ${theme.palette.primary.main}`,
            },
            borderRadius: "8px",
          }}
        >
          <IconBtn
            Icon={FavoriteBorderOutlinedIcon}
            elementStyle={{ width: "fit-content" }}
            btnStyle={{
              justifyContent: "center",
              color: `${theme.palette.bright.main}`,
              backgroundColor: "transparent",
              padding: "0",
            }}
            disableRippleEffect={true}
          />
          <Typography
            width={{ xs: "100%", md: "fit-content" }}
            fontWeight="600"
            fontSize="14px"
            lineHeight="normal"
            ml={{ xs: 0, md: 1 }}
            color={theme.palette.primary.main}
          >
            Add To Wishlist
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductDescription;
