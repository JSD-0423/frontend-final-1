import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

const QuantityCounter = () => {
  const [quantityCount, setQuantityCount] = useState(1);

  const theme = useTheme();

  const handleIncrement = () => {
    setQuantityCount(quantityCount + 1);
  };

  const handleDecrement = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1);
    }
  };
  return (
    <Box
      sx={{
        display:'flex',
        width: "fit-content",
        padding: "1px",
      }}
    >
      <Typography fontWeight='600' fontSize='20px' lineHeight='26px' color={theme.palette.dark.main} mr={1}>
        Quantity:
      </Typography>
      <Stack direction='row' border={`1px solid ${theme.palette.primary.main}`} borderRadius="4px">
        <Button onClick={handleDecrement} sx={{ minWidth: "0", padding: "4px" }}>
          <RemoveIcon sx={{ fontSize: "18px", color: "black" }} />
        </Button>
        <span style={{ fontSize: "14px", marginTop: "4px" }}>
          {quantityCount}
        </span>
        <Button onClick={handleIncrement} sx={{ minWidth: "0", padding: "4px" }}>
          <AddIcon sx={{ fontSize: "18px", color: "black" }} />
        </Button>
      </Stack>
    </Box>
  );
};
export default QuantityCounter;
