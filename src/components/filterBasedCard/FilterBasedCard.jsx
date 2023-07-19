import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import IconBtn from "../iconBtn/IconBtn";

const FilterBasedCard = ({ cardTitle, cardInfo, iconName }) => {
  const theme = useTheme();
  return (
    <>
      {cardInfo === "Makeup Accessories from Top Brands" && (
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
              invariant="p"
              color="#97451F"
              fontSize={["18px", "25px", "30px"]}
              textTransform="uppercase"
            >
              {cardTitle}
            </Typography>
            <Typography
              width="100%"
              height="auto"
              fontWeight={{ xs: "800", md: "700" }}
              margin={{ xs: "0 0 14.1px 0", md: "0 0 19px 0" }}
              fontSize={{ xs: "16px", md: "52px" }}
              lineHeight={{ xs: "20px", md: "68px" }}
              color="#97451F"
            >
              {cardInfo}
            </Typography>
          </Stack>
        </Stack>
      )}
      {cardInfo === "Skincare Essentials" && (
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
              color="#A53F64"
            >
              {cardInfo}
            </Typography>
            <IconBtn
              iconsNames={iconName}
              iconColor={"#A53F64"}
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
      {cardInfo === "Facepacks & Peels" && (
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
              lineHeight={{ xs: "16px", md: "52px" }}
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
              iconBackgroundColor={"#17494D29"}
              pseudoType={"&:hover"}
              pseudoIconId={"EastIcon"}
              pseudoBackgroundColor={"#17494D29"}
              style={{ padding: ["6px", "8px"] }}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default FilterBasedCard;
