import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import IconBtn from "../iconBtn/IconBtn";

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
              iconsNames={iconName}
              iconColor={"brown.main"}
              iconSize={{ xs: "20px", md: "30px" }}
              iconBackgroundColor={"transparentBrown.main"}
              pseudoType={"&:hover"}
              pseudoIconId={"EastIcon"}
              pseudoBackgroundColor={"transparentBrown.main"}
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
              iconsNames={iconName}
              iconColor={"pink.main"}
              iconJustifyContent={"flex-end"}
              iconSize={{ xs: "20px", md: "30px" }}
              iconBackgroundColor={theme.palette.grey.main}
              pseudoType={"&:hover"}
              pseudoIconId={"EastIcon"}
              pseudoBackgroundColor={theme.palette.grey.main}
              style={{ padding: ["6px", "8px"] }}
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
              iconsNames={iconName}
              iconColor={theme.palette.primary.main}
              iconJustifyContent={"flex-end"}
              iconSize={{ xs: "20px", md: "30px" }}
              iconBackgroundColor={"navy.main"}
              pseudoType={"&:hover"}
              pseudoIconId={"EastIcon"}
              pseudoBackgroundColor={"navy.main"}
              style={{ padding: ["6px", "8px"] }}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default FilterBasedCard;
