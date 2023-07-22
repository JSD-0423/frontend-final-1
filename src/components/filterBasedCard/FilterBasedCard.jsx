import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { IconBtn } from "../index.js";

const FilterBasedCard = ({ cardInfo, iconName }) => {
  const theme = useTheme();
  return (
    <>
      {cardInfo === "Limited Edition Products" && (
        <Stack
          direction="row"
          width="100%"
          height="100%"
          pl={{ xs: "17px", md: "39px" }}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Stack direction="column" width={{ xs: "42%", md: "45%" }}>
            <Typography
              width="100%"
              height="auto"
              fontWeight={{ xs: "800", md: "700" }}
              margin={{ xs: "0 0 14.1px 0", md: "0 0 19px 0" }}
              fontSize={{ xs: "16px", md: "52px" }}
              lineHeight={{ xs: "20px", md: "68px" }}
              color="brown.main"
            >
              {cardInfo}
            </Typography>
            <IconBtn
              Icon={iconName}
              btnStyle={{
                color: `${theme.palette.brown.main}`,
                backgroundColor: `${theme.palette.transparentBrown.main}`,
              }}
              iconStyle={{ fontSize: ["20px", "30px"] }}
              pseudoType={"&:hover"}
              pseudoIconId={iconName}
              pseudoStyle={{
                backgroundColor: `${theme.palette.transparentBrown.main}`,
              }}
            />
          </Stack>
        </Stack>
      )}
      {cardInfo === "15% Off and More!" && (
        <Stack
          direction="row"
          width="100%"
          height="100%"
          justifyContent="flex-end"
        >
          <Stack
            direction="column"
            pr={{ xs: "11px", md: "35px" }}
            pt={{ xs: "11px", md: "26px" }}
            pb={{ xs: "11px", md: "26px" }}
            width={{ xs: "54%", md: "41%" }}
          >
            <Typography
              textAlign="center"
              height={{ xs: "32px", md: "104px" }}
              width="100%"
              margin={{ xs: "0 0 19px 0", md: "0 0 21px 0" }}
              fontWeight={{ xs: "800", md: "700" }}
              lineHeight={{ xs: "16px", md: "52px" }}
              fontSize={["14px", "20px", "35px", "40px"]}
              color="pink.main"
            >
              {cardInfo}
            </Typography>
            <IconBtn
              Icon={iconName}
              btnStyle={{
                color: `${theme.palette.pink.main}`,
                backgroundColor: `${theme.palette.grey.main}`,
                padding: ["6px", "8px"],
              }}
              elementStyle={{ justifyContent: "flex-end" }}
              iconStyle={{ fontSize: ["20px", "30px"] }}
              pseudoType={"&:hover"}
              pseudoIconId={iconName}
              pseudoStyle={{ backgroundColor: `${theme.palette.grey.main}` }}
            />
          </Stack>
        </Stack>
      )}
      {cardInfo === "Popular in the community!" && (
        <Stack
          direction="row"
          width="100%"
          height="100%"
          justifyContent="flex-end"
        >
          <Stack
            direction="column"
            pr={{ xs: "11px", md: "35px" }}
            pt={{ xs: "11px", md: "26px" }}
            pb={{ xs: "11px", md: "26px" }}
            width={{ xs: "61%", md: "44%" }}
          >
            <Typography
              textAlign="center"
              height={{ xs: "32px", md: "104px" }}
              width="100%"
              margin={{ xs: "0 0 19px 0", md: "0 0 21px 0" }}
              fontWeight={{ xs: "800", md: "700" }}
              lineHeight={{ xs: "16px", md: "43px" }}
              fontSize={["14px", "20px", "35px", "40px"]}
              color={theme.palette.primary.main}
            >
              {cardInfo}
            </Typography>
            <IconBtn
              Icon={iconName}
              btnStyle={{
                padding: ["6px", "8px"],
                color: `${theme.palette.primary.main}`,
                backgroundColor: `${theme.palette.navy.main}`,
              }}
              elementStyle={{ justifyContent: "flex-end" }}
              iconStyle={{ fontSize: ["20px", "30px"] }}
              pseudoType={"&:hover"}
              pseudoIconId={iconName}
              pseudoStyle={{ backgroundColor: `${theme.palette.navy.main}` }}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default FilterBasedCard;
