import { Skeleton, Stack } from "@mui/material";
import React from "react";

const TitledCard = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        flexWrap="nowrap"
        spacing={{ xs: 2, md: 3 }}
        overflow="auto"
      >
        {Array.from(new Array(4)).map((_, index) => (
          <Skeleton
            key={index}
            animation="wave"
            height={150}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        ))}
      </Stack>
    </>
  );
};

export default TitledCard;
