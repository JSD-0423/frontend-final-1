import React from "react";
import { IconButton, Stack } from "@mui/material";

const IconBtn = ({
  Icon,
  btnStyle,
  iconStyle,
  handleClick,
  elementStyle,
  pseudoType,
  pseudoIconId,
  pseudoStyle,
}) => {
  if (pseudoIconId === Icon) {
    btnStyle[pseudoType] = pseudoStyle;
  }
  return (
    <Stack direction="row" sx={elementStyle}>
      <IconButton sx={btnStyle} onClick={handleClick}>
        <Icon sx={iconStyle} />
      </IconButton>
    </Stack>
  );
};

export default IconBtn;
